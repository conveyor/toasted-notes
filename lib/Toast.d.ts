import { MessageOptionalOptions } from "./ToastManager";
declare class Toaster {
    createNotification?: Function;
    removeAll?: Function;
    closeToast?: Function;
    constructor();
    closeAll: () => void;
    bindNotify: (fn: Function, removeAll: Function, closeToast: Function) => void;
    notify: (message: any, options?: MessageOptionalOptions) => any;
    close: (id: number, position: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right") => void;
}
export default Toaster;
