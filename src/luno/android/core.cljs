(ns luno.android.core
  (:require [reagent.core :as r :refer [atom]]
            [clojure.string :refer [blank?]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [luno.handlers]
            [luno.subs]
            [luno.shared.ui :as ui]
            [luno.shared.scenes.main :refer [main-scene]]
            [luno.shared.scenes.about :refer [about-scene]]
            [luno.android.ui :as android-ui]
            [luno.android.styles :as s]
            [luno.android.routes :refer [routes]]
            [luno.android.components.drawer :refer [drawer-component]]))

(defn show-add-dialog []
  (android-ui/show-dialog {:title        "Add city"
                           :input        {:hint     "Please, input city's name"
                                          :callback (fn [text]
                                                      (dispatch [:load-weather text]))}
                           :positiveText "Add"}))

(defn wrapped-main-scene [{navigator :navigator}]
  (let [drawer (subscribe [:get-android-drawer])]
    [android-ui/drawer-layout {:drawer-width           300
                               :drawer-position        js/React.DrawerLayoutAndroid.positions.Left
                               :render-navigation-view #(r/as-element [drawer-component navigator])
                               :ref                    (fn [drawer]
                                                         (dispatch [:set-android-drawer drawer]))}
     [ui/view {:flex 1}
      [ui/view {:style (get-in s/styles [:statusbar])}]
      [android-ui/toolbar {:title         "Luno"
                           :icon          "menu"
                           :actions       [{:icon    "add-circle"
                                            :onPress (fn [_]
                                                       (show-add-dialog))}]
                           :style         (get-in s/styles [:toolbar])
                           :on-icon-press (fn [_]
                                            (.openDrawer @drawer))}]
      [main-scene {:style           (get-in s/styles [:scenes :main])
                   :city-wrapper-fn (fn [{city-name :name :as city} component]
                                      (let [media-url (-> (get-in city [:bing-image :MediaUrl]) (str))]
                                        (if (blank? media-url)
                                          [android-ui/card
                                           [android-ui/card-body
                                            [ui/text (str "Fetching weather for " city-name "...")]]]
                                          [android-ui/card {:style (get-in s/styles [:scenes :main :city-card :card])}
                                           [android-ui/card-media {:image (r/as-element [ui/image {:source {:uri media-url}}])}
                                            component]])))}]]]))

(defn wrapped-about-scene [{navigator :navigator}]
  [ui/view
   [ui/view {:style (get-in s/styles [:statusbar])}]
   [android-ui/toolbar {:title         "About Luno"
                        :icon          "arrow-back"
                        :style         (get-in s/styles [:toolbar])
                        :on-icon-press (fn [_]
                                         (.pop navigator))}]
   [about-scene {:style            (get-in s/styles [:scenes :about])
                 :github-button-fn (fn [link]
                                     [android-ui/button {:text     "GITHUB"
                                                         :on-press #(.openURL android-ui/intent link)}])}]])

(defn app-root []
  [android-ui/navigator {:initial-route   (routes :main)
                         :style           (get-in s/styles [:app])
                         :configure-scene (fn [_ _]
                                            js/React.Navigator.SceneConfigs.FloatFromBottomAndroid)
                         :render-scene    (fn [route navigator]
                                            (let [route (js->clj route :keywordize-keys true)]
                                              (r/as-element
                                                (condp = (:name route)
                                                  "main" [wrapped-main-scene {:navigator navigator}]
                                                  "about" [wrapped-about-scene {:navigator navigator}]))))}])

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent ui/app-registry "luno" #(r/reactify-component app-root)))
