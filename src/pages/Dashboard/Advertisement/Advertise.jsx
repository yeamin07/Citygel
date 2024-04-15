import { useState } from "react";
import DefaultLayout from "components/Dashboard/layout/DefaultLayout";
import { cetagory_logo } from "assets/Allimages";
import { nature } from "assets/Allimages";
import { CopyBlock, dracula } from "react-code-blocks";
import config from "./config";
const Advertise = () => {
  // logVersionInfo();
  // const [language, changeLanguage] = useState("jsx");
  // const [languageDemo, changeDemo] = useState(sample["jsx"]);
  // const [lineNumbers, toggleLineNumbers] = useState(true);
  return (
    <DefaultLayout classname="container mx-auto mb-6">
      <div className="banner-parent-1">
        {/*~~~~~~~~~~~~~Each component~~~~~~~~~~~ */}
        <div className="flex h-auto w-full flex-col justify-start rounded-[15px] border-[1px] border-solid border-gray-200 p-2 shadow-xl">
          <h2 className="h-[10%] w-full text-center text-[20px] lg:text-[24px]">
            Banner 1
          </h2>
          <div className=" flex h-[90%] w-full flex-col justify-start gap-[4px] sm:flex-row">
            <div className="w-full sm:w-[48%]">
              <img
                src={nature}
                className="h-[400px] w-full rounded-lg object-cover"
                alt="Natural Beauty"
              />
            </div>
            <div className="flex w-full items-center justify-center font-serif text-[22px] font-semibold sm:w-[4%]">
              Or
            </div>
            {/*~~~~~~~~~~~~~~~~~~Advertisement Section~~~~~~~~~~~~~ */}
            <div className="w-full sm:w-[48%]">
              <CopyBlock
                language="go"
                text={`class HelloMessage extends React.Component {
                 handlePress = () => {
                  alert('Hello')
                   }
             render() {
                 return (
                  <div>
                  <p>Hello {this.props.name}</p>
                    <button onClick={this.handlePress}>Say Hello</button>
                  </div>
                    );
                  }
                    }
                  );`}
                codeBlock
                theme={dracula}
                showLineNumbers={false}
              />
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Advertise;
