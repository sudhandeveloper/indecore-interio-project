import Axios from "axios";
import { SlideshowLightbox } from "lightbox.js-react";
import React, { useEffect, useState } from "react";
import { useTransition } from "react";

const Dashboardpage = () => {
  // const [title, setImage] = useState(null);
  // const [photos, setPhotos] = useState([]);

  // const handleChange = (e) => {
  //   setImage(e.target.value);
  // };

  // const submitForm = (e) => {
  //   e.preventDefault();

  //   Axios
  //     .post(`https://jsonplaceholder.typicode.com/users`, { title })
  //     .then((res) => {
  //       console.log(res);
  //       console.log(res.data);
  //     });
  // };
  // useEffect(() => {
  //   // Fetch existing images when the component mounts
  //   Axios.get("https://jsonplaceholder.typicode.com/photos")
  //     .then((res) => {
  //       const lastTenImages = res.data.slice(-5);
  //       setPhotos(lastTenImages);
  //     });
  // }, []);
  const [users, setUsers] = useState([]);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [image, setImages] = useState("");
  const [updated, setUpdate] = useState({ id: "", name: "" });
  const [edite, setEdite] = useState(false);

  useEffect(() => {
    loadData();
  }, []);

  // get User
  const loadData = async () => {
    const response = await Axios.get("http://localhost:3003/users");
    setUsers(response.data);
  };
  // Add User
  const AddUser = (e) => {
    e.preventDefault();
    Axios.post("http://localhost:3003/users", { id, name, image })
      .then(() => {
        setId("");
        setName("");
        setImages("");
      })
      .catch((err) => {
        console.log(err);
      });
    setTimeout(() => {
      loadData();
    }, 500);
  };
  // DeleteUser
  const DeleteUser = (id) => {
    Axios.delete(`http://localhost:3003/users/${id}`);
    setTimeout(() => {
      loadData();
    }, 500);
  };
  // Updated users
  // modal box for edite
  const modelBox = () => {
    setEdite(!edite);
  };
  const UpdateUser = (e) => {
    e.preventDefault();
    Axios.put(`http://localhost:3003/users/${updated.id}`, {
      id: updated.id,
      name: updated.name,
    })
      .then((response) => {
        console.log(response);
      })
      .catch((e) => {
        console.log(e);
      });
    setTimeout(() => {
      loadData();
    }, 500);
  };
  return (
    <>
      <center>
        {" "}
        <div className="flex justify-center w-full gap-10 mt-10">
          {" "}
          <input
            className="pl-2 outline-none outline-red-500"
            type="text"
            placeholder="enter id .."
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            className="pl-2 outline-none outline-red-500"
            type="text"
            placeholder="enter Name .."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="pl-2 outline-none "
            type="file"
            placeholder="enter IMAGE .."
            value={image}
            onChange={(e) => setImages(e.target.value)}
          />
          <button onClick={AddUser} className="px-5 py-2 bg-red-50">
            ADD
          </button>
        </div>
      </center>

      <div className="relative flex justify-center w-full pt-20 mt-20 mb-20 text-2xl uppercase bg-gray-200 jus h-96">
        <ul className="">
          {users.map((e) => (
            <li className="flex justify-around w-full pr-2 mb-3" key={e.id}>
              <span className="pr-4"> {e.id}.</span>
              <span className="pr-4 "> {e.name}</span>
              <img src={e.image} alt="loading" />
              <button
                onClick={() => {
                  DeleteUser(e.id);
                }}
                className="px-5 py-1 text-xl text-white bg-green-600"
              >
                Delete
              </button>
              <button
                onClick={modelBox}
                className="px-5 py-1 ml-2 text-xl text-white bg-green-600"
              >
                EDITE
              </button>

              <section
                className={`absolute  w-[50%] top-0 flex justify-center  p-6 h-96 dark:text-gray-100 ${
                  edite ? "inline-block" : "hidden"
                }`}
              >
                <div className="container relative">
                  <button className={`absolute top-2 right-2 `}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="flex-shrink-0 w-6 h-6"
                      onClick={modelBox}
                    >
                      <polygon points="427.314 107.313 404.686 84.687 256 233.373 107.314 84.687 84.686 107.313 233.373 256 84.686 404.687 107.314 427.313 256 278.627 404.686 427.313 427.314 404.687 278.627 256 427.314 107.313"></polygon>
                    </svg>
                  </button>
                  <div className="w-full px-6 py-16 rounded-md sm:px-12 md:px-16 xl:col-span-2 dark:bg-gray-900">
                    <div className="self-stretch space-y-3">
                      <div>
                        <label className="text-sm sr-only">Your name</label>
                        <input
                          onChange={(e) =>
                            setUpdate({ ...updated, id: e.target.value })
                          }
                          type="text"
                          placeholder="Your ID"
                          className="w-full px-5 py-1 rounded-md focus:ring focus:ri dark:border-gray-700"
                        />
                      </div>
                      <div>
                        <label className="text-sm sr-only">Name</label>
                        <input
                          onChange={(e) =>
                            setUpdate({ ...updated, name: e.target.value })
                          }
                          type="text"
                          placeholder="Your Name"
                          className="w-full px-5 py-1 rounded-md focus:ring focus:ri dark:border-gray-700"
                        />
                      </div>
                      <button
                        onClick={UpdateUser}
                        type="button"
                        className="w-full py-2 font-semibold uppercase rounded dark:bg-violet-400 dark:text-gray-900"
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </li>
          ))}{" "}
        </ul>
      </div>

      {/* <div className="m-5">
        <h2 className="text-center text-[30px] font-RobatoTwo text-red-600">
          Welcome to Your DashBoard
        </h2>
        <center>
          <div>
            <input type="text" onChange={handleChange} />
            <button
              type="button"
              onClick={submitForm}
              className="px-10 py-2 text-white bg-red-400 rounded-lg"
            >
              SUBMIT
            </button>
          </div>

          <div className="container mx-auto">
            <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2 sm:grid-cols-2">
              {photos.map((photoo) => (
                <li key={photoo.id} className="">
                  <div className="justify-center p-4 ">
                
                    <p className="mt-2 text-center">{photoo.title}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </center>
      </div> */}
    </>
  );
};

export default Dashboardpage;
