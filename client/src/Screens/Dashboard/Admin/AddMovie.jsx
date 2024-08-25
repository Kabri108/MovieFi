import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar";
import { UsersData } from "../../../Data/MovieData";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { ImUpload } from "react-icons/im";
import Uploder from "../../../Component/Uploder";
import { Input, Message, Select } from "../../../Component/UsedInput";
import CategoriesData from "../../../Data/CategoriesData ";
import CastsModal from "../../../Component/modals/CastsModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { movieValidation } from "../../../Component/Validation/MovieValidation";
import { removeCastAction } from "../../../Redux/Actions/moviesAction";
import toast from "react-hot-toast";
import {InlineError} from '../../../Component/Notification/Error'
import ImagePreview from "../../../Component/ImagePreview";
// import { InlineError } from '../Component/Notification/Error';

function AddMovie() {
    const [modalOpen, setModalOpen] = useState(false);
    const [cast, setCast] = useState(null);
    const [imageWithoutTitle, setimageWithoutTitle] = useState("");
    const [imageTitle, setimageTitle] = useState("");
    const [videoUrl, setvideoUrl] = useState("");

    const dispatch=useDispatch();
    const navigate=useNavigate();

    //use selectors
    const {categories} =useSelector((state)=>state.categoryGetAll)
    const{isLoading,isError,isSuccess}=useSelector(
      (state)=>state.createMovie
    )

    // const {casts}=useSelector((state)=>state.casts)
   
// validate movies

const {
  handleSubmit,
  register,
  reset,
  formState: { errors },
} = useForm({
  resolver: yupResolver(movieValidation),
});

//on submit
const onSubmit = (data) => {
  // dispatch(loginAction(data));
  console.log(data)
};

//delete cast handler
const deleteCastHandler=(id)=>{
  dispatch(removeCastAction(id))
  toast.success("Cast deleted successfully")
}



    useEffect(() => {
    //  if modal is false then reset cast
      if (modalOpen === false) {
        setCast();
      }
      //if modal is success then reset from and nevigate to addmovies
      if(isSuccess){
        reset({
          name:"",
          time:"",
          language:"",
          year:"",
          category:"",
          desc:"",
        })
        setimageTitle("")
        setimageWithoutTitle("")
        setvideoUrl("")
        dispatch({type:"CREATE_MOVIE_RESET"})
        navigate("/addMovie")
      }
      if(isError){
        toast.error("something went wrong")
        dispatch({type:"CREATE_MOVIE_RESET"})
      }
    }, [modalOpen,isError,isSuccess,dispatch,reset,navigate]);
  
    return (
      <Sidebar>
        <CastsModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          cast={cast}
        />
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-bold">Create Movie</h2>
          <div className="w-full grid md:grid-cols-2 gap-6">
            <div className="w-full">
            <Input
              label="Movie Title"
              placeholder="Game of Thrones"
              type="text"
              bg={true}
              name="name"
              register={register("name")}
            />
            {errors.name && <InlineError text={errors.name.message} />}
            </div>
            <div className="w-full">
            <Input label="Hours" 
            placeholder="2hr" 
            type="text" 
            bg={true}
            name="time"
            register={register('time')} 
            />
             {errors.time && <InlineError text={errors.time.message} />}
            </div>
          </div>
  
          <div className="w-full grid md:grid-cols-2 gap-6">
            <div className="w-full">
            <Input
              label="Language Used"
              placeholder="English"
              type="text"
              bg={true}
              name="language"
              register={register("language")}
            />
            {errors.language && <InlineError text={errors.language.message} />}
            </div>
            <div className="w-full">
            <Input
              label="Year of Release"
              placeholder="2022"
              type="number"
              bg={true}
              name="year"
              register={register("year")}
            />
            {errors.year && <InlineError text={errors.year.message} />}
            </div>
          </div>
  
          {/* IMAGES */}
          <div className="w-full grid md:grid-cols-2 gap-6">
            {/* img without title */}
            <div className="flex flex-col gap-2">
              <p className="text-border font-semibold text-sm">
                Image without Title
              </p>
              <Uploder setImageUrl={setimageWithoutTitle} />
              <ImagePreview image={imageWithoutTitle} name="imageWithoutTitle"/>
              <div className="w-32 h-32 p-2 bg-main border border-border rounded">
                <img
                  src="/images/movies/99.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
            {/* image with title */}
            <div className="flex flex-col gap-2">
              <p className="text-border font-semibold text-sm">
                Image with Title
              </p>
              <Uploder setImageUrl={setimageTitle} />
              <ImagePreview image={imageTitle} name="imageTitle"/>
              <div className="w-32 h-32 p-2 bg-main border border-border rounded">
                <img
                  src="/images/movies/88.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className="w-full">
          <Message
            label="Movie Description"
            placeholder="Make it short and sweet"
            name="desc"
            register={{...register("desc")}}
          />
          {errors.desc && <InlineError text={errors.desc.message} />}
          </div>
          {/* CATEGORY */}
          <div className="text-sm w-full">
            <Select label="Movie Category" options={categories.length>0 ?categories:[]}
            name="category"
            register={{...register("category")}}
            />
            {errors.category && <InlineError text={errors.category.message} />}
          </div>
          {/* MOVIE VIDEO */}
  
          <div className="flex flex-col gap-2 w-full ">
            <label className="text-border font-semibold text-sm">
              Movie Video
            </label>
            <div className={`w-full grid ${videoUrl && "md:grid-cols-2"}gap-6`}>
              {
                videoUrl &&(
                  <div className="w-full bg-main text-sm text-subMain py-4 border border-border rounded flex-col">
                    Video Uploaded!!!
                  </div>
                )
              }
            <Uploder  setImageUrl={setvideoUrl}/>
            </div>
          </div>
          {/* CASTS */}
          <div className="w-full grid lg:grid-cols-2 gap-6 items-start ">
            <button
              onClick={() => setModalOpen(true)}
              className="w-full py-4 bg-main border border-subMain border-dashed text-white rounded"
            >
              Add Cast
            </button>
            <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
              {UsersData.map((user, i) => (
                <div
                  key={i}
                  className="p-2 italic text-xs text-text rounded flex-colo bg-main border border-border"
                >
                  <img
                    src={`/images/${user.image ? user.image : "user.png"}`}
                    alt={user.fullName}
                    className="w-full h-24 object-cover rounded mb-2"
                  />
                  <p>{user.fullName}</p>
                  <div className="flex-rows mt-2 w-full gap-2">
                    <button className="w-6 h-6 flex-colo bg-dry border border-border text-subMain rounded">
                      <MdDelete />
                    </button>
                    <button
                      onClick={() => {
                        setCast(user);
                        setModalOpen(true);
                      }}
                      className="w-6 h-6 flex-colo bg-dry border border-border text-green-600 rounded"
                    >
                      <FaEdit />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* SUBMIT */}
          <button
          onClick={
            handleSubmit(onSubmit)
          }
          className="bg-subMain w-full flex-rows gap-6 font-medium text-white py-4 rounded">
            <ImUpload /> Publish Movie
          </button>
        </div>
      </Sidebar>
    );
  }
  
  export default AddMovie;