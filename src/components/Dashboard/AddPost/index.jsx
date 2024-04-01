import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { toast, ToastContainer } from "react-toastify";

import "./Addquestion.css";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle } from "react-icons/ai";
import EditorToolbar, { modules, formats } from "./EditorToolbar";
import auth from "firebase.init";
import AdsInput from "components/Input/AdsInput";
const AddPosts = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  // const { data, isLoading, refetch } = useQuery("tools", () => fetch("https://langzila-server.onrender.com/ask").then(res => res.json()));

  const [valuequil, setValuequil] = useState("");
  const navigate = useNavigate();
  const ENTER = 13;
  const COMMA = 188;
  const BACKSPACE = 8;
  const SPACE = 32;
  const [tags, setTags] = useState(["Car", "Computer", "Phone"]);
  const [value, setValue] = useState("");

  const handleKeyUp = (e) => {
    const key = e.keyCode;
    if (key === ENTER || key === COMMA || key === SPACE) {
      addTag();
    }
  };

  const handleKeyDown = (e) => {
    const key = e.keyCode;
    if (key === BACKSPACE && !value) {
      editTag();
    }
  };
  const handleclose = (e) => {
    editTag();
  };
  const addTag = () => {
    let tag = value.trim().replace(/,/g, "");
    if (!tag) return;
    setTags([...tags, tag]);
    setValue("");
  };

  const editTag = () => setValue(tags.pop());
  const imageStorageKey = "3a1e59ad1d3a8caba2efe37f45b560e9";

  // if (isLoading) {
  //   return <Spinner></Spinner>
  // }

  const onSubmit = async (data) => {
    const image = data.image[0];
    console.log(data);
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        const newtags = tags.reduce((a, v) => ({ ...a, [v]: v }), {});
        if (result.success) {
          const img = result.data.url;
          const topic = {
            tittle: data.tittle,
            disc: value,
            tags: newtags,
            image: img,
            email: user.email,
            name: user.displayName,
            vote: 0,
            zone: new Date(),
            date: new Date().getUTCDate(),
            month: new Date().toLocaleString("default", { month: "long" }),
            time: new Date().toLocaleTimeString(),
          };
        }
      });
  };
  return (
    <div>
      <div className="mx-auto mb-10 mt-9 max-w-6xl border py-5 shadow-sm ">
        <div className="px-10">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control text-center">
              <label className="label flex items-start justify-start">
                <span className="label-text text-xl font-bold">
                  Title{" "}
                  <span className="text-xs text-blue-400  ">REQUIRED</span>
                </span>
              </label>
              {/* <input
                type="text"
                name="tittle"
                className="   mb-5  rounded border-2  border-solid border-red-600 p-5"
                {...register("tittle", {
                  required: {
                    value: true,
                    message: "tittle is Required",
                  },
                })}
              /> */}
              <AdsInput
                name="tittle"
                register={register}
                required
                errors={errors}
              />
              <label className="label ">
                <span className="label-text flex items-start justify-start text-xl font-bold">
                  {" "}
                  <span className="text-xs  text-blue-600 ">REQUIRED</span>
                </span>
              </label>
              <EditorToolbar toolbarId={"t1"} />
              <ReactQuill
                id="editor"
                style={{
                  border: "1px solid #fe4854",
                  color: "black",
                }}
                placeholder="Write here your Discription"
                theme="snow"
                value={valuequil}
                onChange={setValuequil}
                modules={modules("t1")}
                formats={formats}
              />
              <label className="label">
                <span className="label-text mt-5 flex items-start justify-start text-xl font-bold">
                  {" "}
                  <span className="text-xs text-blue-600  ">OPTIONAL</span>
                </span>
              </label>
              <div className="containertag">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="tag text-white flex items-center justify-center gap-3 bg-primary"
                  >
                    {tag}
                    <AiOutlineCloseCircle onClick={handleclose} />
                  </div>
                ))}
                <input
                  className="inputtag />

                "
                  type="text"
                  placeholder="Add Tag and Press Space..."
                  autoFocus
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  onKeyUp={handleKeyUp}
                  onKeyDown={handleKeyDown}
                />
              </div>
              <input
                type="file"
                placeholder="Choose File Here"
                className="mt-5 max-w-xs items-center"
                {...register("image", {
                  required: {
                    value: true,
                    message: "image is required",
                  },
                })}
              />
            </div>

            <div className="flex items-start justify-start">
              <input
                type="submit"
                className="btn text-white mt-5 w-full rounded-31xl  bg-primary py-5 text-white-A700 "
                value={"Add Post"}
              />
            </div>
          </form>
        </div>
      </div>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default AddPosts;
