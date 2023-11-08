import React from "react";
import { Link } from "react-router-dom";
import Table from "../components/Table";
import Sidebar from "../components/Sidebar";
import CreateForm from "../components/CreateForm";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-row min-h-screen">
        <div className="w-1/4">
          {/* <Link>
              <h3 className="uppercase">Add Project</h3>
            </Link> */}
        </div>
        <div className="w-4/5 flex flex-col gap-2">
          <div className="min-h-fit border">
            <CreateForm />
          </div>
          <div>
            <h2 className="uppercase p-2 text-slate-700 font-semibold">
              Tasks
            </h2>
            <Table />
          </div>
        </div>
      </div>
    </>
  );
}
