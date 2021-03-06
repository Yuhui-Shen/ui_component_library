import React, { Fragment } from "react";

import DialogExample1 from "./dialog.example.1";
import DialogExample2 from "./dialog.example.2";
import DialogExample3 from "./dialog.example.3";
import DialogExample4 from "./dialog.example.4";

import Demo from "../../demo";

const DialogDemo = () => {
    return (
        <Fragment>
            <h2>Dialog</h2>
            <p>Informs users while preserving the current page state.</p>
            <h3>Basic Usage</h3>
            <p>Dialog pops up a dialog box, and it's quite customizable.</p>
            <Demo
                code={require("!!raw-loader!./dialog.example.1.tsx").default}
                description={
                    <div className="description">
                        Set the<code className="little-code">visible</code>
                        attribute with a{" "}
                        <code className="little-code">Boolean</code>, and Dialog
                        shows when it is
                        <code className="little-code">true</code>. The optional
                        <code className="little-code">buttons</code>attribute
                        (empty by default) is for implementing buttons.
                    </div>
                }
            >
                <DialogExample1 />
            </Demo>

            <h3>Modal</h3>
            <p>
                The content of Modal Dialog can be anything, even a table or a
                form. This example shows how to use Element Form with Button.
            </p>
            <Demo
                code={require("!!raw-loader!./dialog.example.2.tsx").default}
                description={
                    <div className="description">
                        Pass the<code className="little-code">openModal</code>
                        function into the
                        <code className="little-code">onClick</code>
                        attribute. It supports most functional components as
                        shown in the Options Table.
                    </div>
                }
            >
                <DialogExample2 />
            </Demo>

            <h3>Alert and Confirm</h3>
            <p>Use</p>
            <Demo
                code={require("!!raw-loader!./dialog.example.3.tsx").default}
                description={
                    <div className="description">
                        Pass the<code className="little-code">alert</code>or
                        <code className="little-code">confirm</code>
                        functions from the Dialog Component into the
                        <code className="little-code">onClick</code>
                        attribute. The{" "}
                        <code className="little-code">confirm</code> dialog also
                        supports functions for clicking "Yes" or "No".
                    </div>
                }
            >
                <DialogExample3 />
            </Demo>

            <h3>Close dialog on clicking mask</h3>
            <p>
                Dialog can be adjust to close when click on mask by adjusting
                the<code className="little-code">mask</code>attribute.
            </p>
            <Demo
                code={require("!!raw-loader!./dialog.example.4.tsx").default}
                description={
                    <div className="description">
                        The optional<code className="little-code">mask</code>
                        attribute has two
                        <code className="little-code">Boolean</code>
                        fields:
                        <code className="little-code">visible</code>(default:
                        <code className="little-code">true</code>) and
                        <code className="little-code">closeOnClick</code>
                        (default:
                        <code className="little-code">false</code>).
                    </div>
                }
            >
                <DialogExample4 />
            </Demo>
        </Fragment>
    );
};

export default DialogDemo;
