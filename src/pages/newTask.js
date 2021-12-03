import Layout from '../components/Layout';

export default function NewTask() {
    return (
        <Layout>
            <div>
                <h1 className='text-2xl font-medium leading-6 text-gray-900'>Tarea Nueva</h1>
                <div className="mt-5 md:mt-0 md:col-span-2">
                    <form action="#" method="POST">
                        {/*id*/}
                        <div className="my-5 flex rounded-md shadow-sm gap-2">
                            <span
                                className="inline-flex items-center px-3 py-1
                                    rounded-md border border-gray-300
                                    bg-red-400 text-white

                                    text-bold text-sm">ID:
                            </span>
                            <input
                                type="text" name="Id"
                                id="idId" placeholder="Ingrese un ID"
                                className="
                                 bg-white hover:bg-green-400 focus:bg-red-400
                                 text-black hover:text-white focus:text-white
                                 ring-4 ring-blue-700 ring-inset-4
                                 focus:placeholder-red-600
                                 hover:placeholder-green-600
                                 flex-1 block w-full rounded-md
                                 text-sm px-3 py-1"
                            />
                        </div>

                        {/*Tarea*/}
                        <div className="my-5 flex rounded-md shadow-sm gap-2">
                            <span
                                className="inline-flex items-center px-3 py-1
                                    rounded-md border border-gray-300
                                    bg-red-400 text-white
                                    text-bold text-sm">Tarea
                            </span>
                            <input
                                type="text" name="Tarea"
                                id="idTarea" placeholder="Ingrese una tarea"
                                className="
                                 bg-white hover:bg-green-400 focus:bg-red-400
                                 text-black hover:text-white focus:text-white
                                 ring-4 ring-blue-700 ring-inset-4
                                 flex-1 block w-full rounded-md
                                 text-sm px-3 py-1"
                            />
                        </div>
                        {/*Descripcion*/}
                        <div className="my-5 flex rounded-md shadow-sm gap-2">
                            <span
                                className="inline-flex items-center px-3 py-1
                                    rounded-md border border-gray-300
                                    bg-red-400 text-white
                                    text-bold text-sm">Descripción
                            </span>
                            <input
                                type="text" name="Descripcion"
                                id="idDescripcion" placeholder="Ingrese una descripcion"
                                className="
                                 bg-white hover:bg-green-400 focus:bg-red-400
                                 text-black hover:text-white focus:text-white
                                 ring-4 ring-blue-700 ring-inset-4
                                 focus:placeholder-red-600
                                 hover:placeholder-green-600
                                 flex-1 block w-full rounded-md
                                 text-sm px-3 py-1"
                            />
                        </div>
                        {/*Status*/}
                        <div className=" my-5 flex rounded-md shadow-sm gap-2">
                            <span
                                className=" inline-flex items-center px-3 py-1
                                rounded-md border border-gray-300
                                bg-red-400 text-white
                                text-bold text-sm">Estado
                            </span>
                            <input
                                type=" text" name=" Status"
                                id=" idStatus" placeholder=" Pendiente o Terminado"
                                className="
                            bg-white hover:bg-green-400 focus:bg-red-400
                            text-black hover:text-white focus:text-white
                            ring-4 ring-blue-700 ring-inset-4
                                 focus:placeholder-red-600
                                 hover:placeholder-green-600
                                flex-1 block w-full rounded-md
                                text-sm px-3 py-1"
                            />
                        </div>

                        <input type="submit" value="Submit"
                               className="inline-flex justify-center py-2 px-4
                                border border-transparent shadow-sm rounded
                                text-sm font-medium-md text-white
                                bg-indigo-600 hover:bg-indigo-700
                                focus:outline-none focus:ring-2 focus:ring-offset-2
                                focus:ring-indigo-500"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    );
};