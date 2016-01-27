(ns ^:figwheel-load luno.ios.core
  (:require [reagent.core :as r :refer [atom]]
            [clojure.string :refer [blank?]]
            [re-frame.core :refer [subscribe dispatch dispatch-sync]]
            [luno.handlers]
            [luno.subs]
            [luno.ui :as ui]
            [luno.shared.scenes.about :refer [about-scene]]
            [luno.shared.scenes.main :refer [main-scene]]
            [luno.ios.styles :as s]))

(def logo-img
  (js/require "./images/luno_drawer.png"))

(def cloud-icon
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAQjElEQVR4Xu1df3RU1Z3/fO9MIATRbkXR2lVru+Ku+IOGzCQgzBugVEhmQCXFlupau2o51uNZ7Vp13TbWo13tdl3dU2k97qm4WMVohXkJKb8yb4JK3gQUuysrWos/KGqhR0UJIZl3v3vehEzmTSbkTZhJMm/e+y95937v9/O5n7n3vfu+93sJ7lXSDFBJo3fBwxVAiYvAFYArgBJnoMThuyOAK4ASZ6DE4bsjgCuAEmegxOG7I4ArgBJnoMThuyOAK4ASZ6DE4bsjgCuAEmegxOG7I4ArgBJnoMThuyOAK4ASZ6DE4bsjgCuAEmegxOG7I4ArgBJnoMThuyOAK4ASZqChQfhi2y8QTNMl0wVEfA6ALwLyZEBMkIxxgqgT4M/AOEgC7zDTbgC7BXj7Nk19vdjZK7kRwL9w4Yno9C6WjMUgBAXh88PvRH6fmKJMpIoj49dt29Z4ePi2RqdmyQigZu7imWzIGyXjChIYn3e6GQcBfpZJrIxrke15t18gg44XQLWyeL5k424imlkgDgeaZWyUHrq3ozXSNmJtDrMhxwpgRjA81SP5YRAWDMUNA/sZcqeHxP8y410Cvy9Bh0hwN0uqIMYkEJlTxd8AciqDLiLglKHsSuaIh7w3t2tr3x6q7Gjdd5wAFEXxHuYT7wCMu0BiXFZiWUqQ50UAz8FDm/Qt63bl2AFUM2fxNCl4LoOXEjALyL7NTkIeFhA/0ZXKB9DQIHNsp+DFHSWAmXMXnZVIiDUkyD8IcweI8WhPGX61Y7P6br7YrZpfe44w6Bop6cZBHyqZWyXJ5R3a+g/y1W4+7DhGAP5AOAjiZwBMziRGAh8R80+7xnc/8vuNGw/lg7hsNhSl/oROPryCQbdnE4KU8kMhxFJdU18olA+52nWEAHzBum8R43GAyjIIYBA9xsJzR3zL83/JlZzhlq9UQpMF4QHBuCZzapBAl4doWXs0Ehmu/XzWK3oBVAfqrmOiXw2cg2kvgb7Trq3bnE/CcrFlvoEYMrFaCDElvZ6U0iDh+W5ci6zKxV4hyha1AKqVuuXM/ARIiAxyouOMxLKtW1v2F4K0XGxWKYtOI+l5mgQCmSIQHnGFHlXX5WIv32WLVgDmnC+JNwrAayVFPj4Bh67TNC2Rb7KGa+/8+vpxJ+zvegLAMosIgC5iuSAea946XNvHW68oBWA+daNHdAx40GI8rMfUm4+XlALVJ1+w7hfEtCLdvrkGUVZGF7+4KbKvQO0e02zRCcB8z+/CpJcYqMog8rG4pl43GiTm0CZVB0KrmfAti+8SsbOmlM9rbGw0crCVl6JFJwC/Er4H4Lss6CVtOHPK+NrRIDDXXqisvL6sbOL7LSwwz1KX6Ud6LHJPrvaOt3xRCaAqGDpfML9ifd2TexLeiuk7Njd+crxkjFT92bMXntIlxE5B4gt9bZqvh17QBdu0yB9Gyg+znVEXgG/eZSezTJzmJZ7IoATLxJ91xb8v27JplRKKCkBJIy0hgNm6praPJGn5aKsmGApIKVvT32AY+F1cUxfmw75dGyMuAFP9PaJsKUguYlB1tpU7MDpBtAOMTexNrIlvWf9GjRK+VIJbMoD9XNfUH9gFO9bKVSvhlQz+XsZUsECPRTaNlK8jJgDzyd2TED+SElfm/j2eN4P5dJA4P/Xrl/jTkfIjUwu5tFvoTrjkktq/6vaK3elfFlkiFm9TU6NcoX0ouACS78AHDt8Fxu1ZlmqHj4/oBj0aeXT4BsZGTZ8S/j6B/zPDG3NaG5HvBQUVQOXsy0/3erp/i96h/thX8hPtgBW9QerIPRNw6NyxtNgzFLzB7iuKUn5ITnzbslxM8ik92mx5VRyu/aHqFUwAM+cu+XKP7NksIM4e6AT3EEQTs1SloLg8AXt2qGqn+Y7fLSrOSBjiqyTEQrBRD4jPZdZn8Iq41vTLocAVy/1qJfRDBv61/+FWHh7X45ny4ouRTwuNoSACMNe/AdqW2fnJjyAe8QizcZ+d7+IXLlgwsaJn3A2Gwbf1/UIky32TK+Q5LS0tRwpNzkjZT/Ilaa8QwpNqk/laPdb060L7kHcBmL/iTkyKEnBJuvNs4B0WqO+IqR25gqoMhSq8n9IKyfI2QeIBXYv8PFcbY728Twm1EHBpmp9rdU29rNB+510A/kD4DhDfl+64wcbvPV7vAn1L5MPjAWQKYdyBci7G8OuhcPuU0HcJeKx/GsBHHUrl5EKHkeVVALO+Fv5Cd4/xBwExoR+w8Z4EfHaG/KFIcvL9amXJ2QxjTzpGEqhsb1VfLiTuvArAFww9TIyb+ucxKYXHO3tb67qXCgnCKbb9gdBbIJi7k5IXA9+La6oZ7FKwK28CMOPhDqFzn4CY1OctQf5Xu9b8DwXz3mGGq+aEnhUCV6T4IzzYHlVvKSTMvAnAFwh9kwi/Sf/1M4uvxNtUy7BWSDDFbrs6ELqXCXemRgDG+nhMrS0krrwJwB8MPQHGVSn1Smxpb1PnF9J5p9n2KeG/J/DjaT+iXXqsObX8XQi8eRHArFnhSQkv77TMX4xb4jH1wUI47VSbPiVUR4Daj4/26lrkrwuJ97gEMEOpnUYkbhEGvgGBiemOEtEl7dGIufvGvWwyUDU3PEdIjvWPADiox9STbFYfVrFhCSC5zJsw7hcClw8aUzAhcZLe0nJwWF6VaCWfEp5B4NRCmbly2tHWnBH0ml9ychJAct8dTbqTDdx5rE+65qpffKua5RtAfp13mjW/EjJXT9MihLkHjBtA+JSAA54y8Ua+g0dtC6ByfuhMbw8aQfBlJd78mseeTSzwFE3oed799ecuz6pg3TzBNMRGFvkxgV5g0BYg8ayutezNvaW0pww7lU1lMvDbrFuiJT4hwi+YEiuP1xk7vji5THUgtJAJ621jZCmJRRTED7XHmtIeHm1bGDom0HTKIPmcdXkX6PuyN65H/viFF5o/st+kW3IwBnxKaAkBzw+PIdrJgm+Nt6qtudQ/5hRg7r5h5pbM+Z4NvEUefLsYgzFzIWekyyZ3OLNxD1PvBTABohzMJzLjDDuhdMT4jdeQ37f7oxxUANVzav+WSbSDcKKFCEkbjghx5U5t7ccjTVBJt9fQIGq0l88xepNRfI0kL8l89e7jx3wIF16xrD26Th+Ks6wCMNf1D/Ph7SCamm5Agp+eiM+uckIo1lDEjPX7ZrDMhJ7y5WDjdkB8KdNfc5+BIFw51ObTrALwB8OPgtm6zUrKdWdOqbiiGHbfjPXOy6d/yQAcnnQTk7w7/UOc2UbyOY3EVfGY+tRgbQ4QgG9uaC5JbLFUYLwqustrnBiIkc/OGE1byXgCNtYMfE3nHiYOxaPNG7L5ZxVAQ4OYEY2/4iHPhanCjE5BdNFIb1kaTTKLte3eEPzOx8Himxk/4IMej+erL7WufSsTm0UAvalW6Mn0QkR8c3u06eFiJaUE/SZ/oO4xEF1reX5jvNx5annNa42N3Zb+Tf9jRmDRq9Zfv9x15qkVF7rzfnHJqL6+3vPe/sNrGVSX4fkduqamws/Ne6kRwBeoqyEiS+gWM30jHos0Fhd811uTgcr59Sd5E52vWN4QGJ2SxXkdbeve62MpJYCBGxXlHl2p+kqho1Ld7iocA75A7WwiYU1Xy3hEj6k3DhCAX6nbB9Dp/Tfo7nYt0lA491zLI8FAZqRWcn3AQ2f3hegnRwD/vPCFMPhVy0MDYVpHVH1tJJx02ygcA72xGz27LbuOQD/o21yTFMDRXHtpO20LH4pUOMiu5UwGqoOhZ5hRn/o/41U9pl6cegj0BeseSc9eJSWe62hTl7pUOoMBXzBcS8xN6WiE4C9ua236U+8UEAhtSE+rzuCGuNZ0tzPguyjMxFTeie9/ZP14RFfpWmT1UQHUvgYSf9dHFYOuGQtpTN2uyx8D/jnh30Hw19OmgWROxV4BKIveBTyp8GNiDg83wiR/LruW8smAXwn9FDCztBy9JG3Q2yKXJgVQFaj7UBCdmrop+Ot6a9PGfDrg2hpdBqqV0DUMpPINSODNDk09NykA3+zQ2+TBWSkXCUuG+o48unDc1nNlIHPTiXl2QUdb82m9r4FK6H8YmJY2P1ytx9T/zrURt/zYZaBaqVMYFO2fAnBIb1NP6BXAnNBmS+rSUUpbOnbpK37PBuRZlPIvelvz5N4pIGMdwAwsbI+py4sftougj4FqpW4Zg55OPQNCvt2hNX/p6Epg6CYmpL75y6M3Xfqcw4AvGLqTGPf2IWLml+KxpllJAdTMCU+Xgi2pSKRXfrljc/MfnUNBaSOpDoSeTE9TLwm/7oiq1/Z+Dm5oEFXRHfvTD2Ag4PZ2Tb2/tGlzDvqqOaG9QuCMNET/qGvqf6TiAfyB8CoQX91XwAD+b7umplYHnUNF6SHJ+rUXxvQObf3OtICQxfMZ0pqlmrhWjzbZ36tWetwWBWK/EvoZgFRWdcn8545Y02lmHqr+oNCGBuGP7njTkuVDsh5va6rpTVjlXsXIQHIDSVfZOxDi5JT/aWcrWaKC/cHw9WC2pCUj4Dvtmtqft6YYWShhn32Bun8iogcsFJCcoUebd5j/swjAjCuf+EHXG5ZlYeCAt4wuyndighLukxGDnszWLnpet+zvZG7VY02p84oG7AyqDoYvZ+bn0r00DzEYrVOtRowtBzZUFahbJ4jC6dAIHGzXmrS+/2XfGzgn1AQBS346BorhWDYHduPwIPmV8K0A/5u1Nj2ra5H+0LDBEjzNXHDZqUZ3z870KGHTEDP9ezwWuXV4Lrm1RooBv1K3FMxrLAdwSHwCkZiWmcVl0PwAvSnL5ObMY14IWPXpKeXXZ24xGilwbjvHZqA3YyuvGnA8D2GpHlUtU/uAh8BM00fTv5p7BS1CIaBDSixz08COITk2NAiftv1fCPTjASM70c/0aOS2bN4OmSUs+WoojZWZ5/kw5Gdg+kkFffagmzBidIUwIxieSsy/TD9TMc2j1bqmmiu8WddyhhSAacicU1jS6qw5ahh/hKD7P1/es8pJx7iMbpfaa733fAZ5m2BeARLjMmuZH3zOnlx+3bE299oSgGm4KhCqEiTXZEtH0tuw/FiyeMZL9PyhcV1bi/k8P3v0j06pi5UlnxtPxjxiWs5s1GbreJjp48hzj52tfbYFYMJNNs7yofSPRtlpMDNc0i6G3E0k3jUzXSZPA3WvnBkgcDmTOJGlcZYEn0dM51u3eQ0w+QGYrrZ7+mhOAuhrqvfcWzwEwkU5I3IrFIaB5LmLnpUJ7/h/zuUg7WEJ4CgCqg6GQ1LKHxLRzMKgcq0OzQD3APwkJN2ntzW9OXR5a4njEUDKkm/eonNJim9DikWAMd3+CaC5uuuWTzLAshsQ7UzUaICf3qGpB4bLTF4EkN548kDkMviIPeeB+VwQTmbGJCZUkBw6Ne1wgTi1HoG6mIxPCOIAAa8bgncdKetuz9dDdt4F4NSOcCouVwBO7VmbuFwB2CTKqcVcATi1Z23icgVgkyinFnMF4NSetYnLFYBNopxazBWAU3vWJi5XADaJcmoxVwBO7VmbuFwB2CTKqcVcATi1Z23icgVgkyinFnMF4NSetYnLFYBNopxazBWAU3vWJi5XADaJcmoxVwBO7VmbuFwB2CTKqcVcATi1Z23icgVgkyinFnMF4NSetYnLFYBNopxazBWAU3vWJq7/Bxtf68x4o81eAAAAAElFTkSuQmCC")

(def info-icon
  "data:image/png;base64,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")

;;TODO: move it to better place
(def tab-bar-ios
  (r/adapt-react-class (.-TabBarIOS js/React)))
(def tab-bar-ios-item
  (r/adapt-react-class (.-TabBarIOS.Item js/React)))

(defn root-scene [{navigator :navigator}]
  (let [tab (subscribe [:get-ios-tab])]
    [tab-bar-ios
     [tab-bar-ios-item {:icon     {:uri cloud-icon :scale 4}
                           :selected (= @tab "main")
                           :on-press #(dispatch [:set-ios-tab "main"])
                           :title    "Weather"}
      [main-scene {:platform        :ios
                   :navigator       navigator
                   :style           (get-in s/styles [:scenes :main])
                   :city-wrapper-fn (fn [city component]
                                      (let [media-url (-> (get-in city [:bing-image :MediaUrl]) (str))]
                                        (when-not (blank? media-url)
                                          [ui/image {:style  {:height     105
                                                              :flex       1
                                                              :resizeMode "cover"}
                                                     :source {:uri media-url}}
                                           [ui/view {:style {:padding          10
                                                             :background-color "transparent"}}
                                            component]])))}]]
     [tab-bar-ios-item {:icon     {:uri info-icon :scale 5}
                           :selected (= @tab "about")
                           :on-press #(dispatch [:set-ios-tab "about"])
                           :title    "About"}
      [ui/view
       [about-scene {:platform  :ios
                     :navigator navigator
                     :style     (get-in s/styles [:scenes :about])}]]]]))

(defn app-root []
  [ui/navigator-ios
   {:initial-route {:title              "Luno"
                    :component          (r/reactify-component root-scene)
                    :rightButtonTitle   "Add city"
                    :onRightButtonPress (fn [_]
                                          (ui/show-dialog-ios {:text     "Please, input city's name"
                                                               :callback (fn [city]
                                                                           (dispatch [:load-weather city]))}))}
    :style         (get-in s/styles [:app])}])

(defn init []
  (dispatch-sync [:initialize-db])
  (.registerComponent ui/app-registry "luno" #(r/reactify-component app-root)))
