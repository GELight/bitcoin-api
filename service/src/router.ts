import controller from "./controller";

export default (app) => {
    app.get('/', controller.root);
}
