import useTaskContext from "../context/TaskContext";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";
import { BsPlusLg as Plus } from "react-icons/bs";

export default function Navbar() {
  const { tasks } = useTaskContext();
  const router = useRouter();
  return (
    <div
      className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box
        flex flex-nowrap w-100 justify-between items-center"
    >
      {/*Menu Hamburguesa*/}
      <div className="flex-none hidden lg:flex">
        <button className="btn btn-square btn-ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/*Empresa*/}
      <div className="flex-1 px-2 mx-0 flex hover:cursor-pointer">
        <Link href={"/"} passHref>
          <span className="text-xs font-bold">Notebo-OK</span>
        </Link>
      </div>

      {/*Search*/}
      {/*<div className="flex-1 lg:flex-none">*/}
      {/*    <div className="form-control">*/}
      {/*        <input type="text" placeholder="Search" className="input input-ghost"/>*/}
      {/*    </div>*/}
      {/*</div>*/}

      {/*newTask*/}
      <div className="flex-none hover:cursor-pointer">
        <button
          className="btn btn-square btn-ghost"
          onClick={() => {
            router.push("/newTask").then();
          }}
        >
          <Plus />
        </button>
      </div>

      {/*listTask / Notificaciones*/}
      <div className="flex-none hover:cursor-pointer">
        <Link href={"/listTask"} passHref>
          <button className="btn btn-square btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block w-6 h-6 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </button>
        </Link>
      </div>

      {/*Badge Notificaciones*/}
      <div className="badge mr-2 badge-outline bg-red-500 text-white -mt-8">
        {tasks.length}
      </div>

      {/*foto*/}
      <div className="flex-none">
        <div className="avatar">
          <div className="rounded-full w-10 h-10 m-1 hover:cursor-pointer">
            <a
              href="https://www.linkedin.com/in/julio-corbaz/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="/favicon.png" alt="foto" width={32} height={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
