/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
interface JQuery {
  magnificPopup(options?: any, callback?: Function): any;
}
