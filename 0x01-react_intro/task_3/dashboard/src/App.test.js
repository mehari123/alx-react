import React from "react";
import App from "./App";
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe("App Componeent Tests", () => {
    it("Renders without crashing", () => {
        const app = shallow( < App / > );
        expect(app).toBeDefined();
    });
    it("renders a div with the class App-header", () => {
        const app = shallow( < App / > );

        expect(app.find(".App-header")).toBeDefined();
    });
    it("renders a div with the class App-body", () => {
        const app = shallow( < App / > );

        expect(app.find(".App-body")).toBeDefined();
    });
    it("renders a div with the class App-footer", () => {
        const app = shallow( < App / > );

        expect(app.find(".App-footer")).toBeDefined();
    });
});