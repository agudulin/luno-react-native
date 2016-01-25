(ns luno.android.components.drawer
  (:require-macros [env.require-img :refer [require-img]])
  (:require
    [reagent.core :as r]
    [luno.ui :as ui]
    [luno.android.routes :refer [routes]]))

(def logo-img
  (require-img "./images/luno_drawer.png"))

(defn drawer-component [navigator]
  [ui/drawer
   [ui/drawer-header {:image (r/as-element [ui/image {:source logo-img}])}]
   [ui/drawer-section {:items [{:icon   "cloud-queue"
                                :active true
                                :value  "Weather"}
                               {:icon    "face"
                                :value   "About"
                                :onPress (fn [_]
                                           (.push navigator (clj->js (routes :about))))}]}]])