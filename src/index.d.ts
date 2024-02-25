/**
 * @component
 * @property {string} feedId Behold feed ID. Can be found in the [Behold dashboard](https://app.behold.so) by opening a widget feed and clicking on "Embed Code"
 * @property {function} [onLoad] Function to run after initial render
 */
declare function BeholdWidget(props: {
    feedId: string;
    onLoad?: Function;
}): import("solid-js").JSX.Element;
export default BeholdWidget;
declare module "solid-js/jsx-runtime" {
    namespace JSX {
        interface IntrinsicElements {
            "behold-widget": {
                "attr:feed-id": string;
                onLoad?: Function;
            };
        }
    }
}
