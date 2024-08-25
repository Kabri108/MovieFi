import React from "react";
import SideBar from "../Sidebar";
import { UsersData } from "../../../Data/MovieData";
import Table2 from "../../../Component/Table2";

function Users() {
  return (
    <SideBar>
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-bold">Users</h2>

        <Table2 data={UsersData} users={true} />
      </div>
    </SideBar>
  );
}

export default Users;
