import React, { useEffect, useState } from "react";
import { HiPlusCircle } from "react-icons/hi";
import SideBar from "../Sidebar";
import CategoryModal from "../../../Component/modals/CategoryModal";
import Table2 from "../../../Component/Table2";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategoriesAction } from "../../../Redux/Actions/CategoriesAction";
import { Empty } from "../../../Component/Notification/Empty";
import Loader from "../../../Component/Loader";

function Categories() {
  const [modalOpen, setModalOpen] = useState(false);
  const [category, setCategory] = useState();
 
  const dispatch=useDispatch();

  //all categories

  const {categories,isLoading}=useSelector(
    (state)=>state.categoryGetAll
  )


  const OnEditFunction = (id) => {
    setCategory(id);
    setModalOpen(!modalOpen);
  };

  useEffect(() => {
    //get all categories
    dispatch(getAllCategoriesAction())
    if (modalOpen === false) {
      setCategory();
    }
  }, [modalOpen,dispatch]);

  return (
    <SideBar>
      <CategoryModal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        category={category}
      />
      <div className="flex flex-col gap-6">
        <div className="flex-btn gap-2">
          <h2 className="text-xl font-bold">Categories</h2>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-subMain flex-rows gap-4 font-medium transitions hover:bg-main border border-subMain text-white py-2 px-4 rounded"
          >
            <HiPlusCircle /> Create
          </button>
        </div>
        {
            isLoading ?( <Loader/>) :categories.length > 0 ? (<Table2
            data={categories}
            users={false}
            OnEditFunction={OnEditFunction}
          />)
          :(<Empty message={"you have no category"}/>)
          }
        
      </div>
    </SideBar>
  );
}

export default Categories;