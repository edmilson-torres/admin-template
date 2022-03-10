import Layout from "../components/template/Layout";

export default function Uers() {
  return (
    <Layout title="Usuários" subtitle="Gerencie os usuários">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-row mb-1 sm:mb-0 justify-between w-full ">
          <div className="text-end">
            <form className="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
              <div className=" relative ">
                <input
                  type="text"
                  id='"form-subscribe-Filter'
                  className=" rounded border-transparent flex-1 appearance-none border -300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="nome"
                />
              </div>
              <button
                className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white dark:bg-gray-900 bg-purple-700 rounded shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
                type="submit"
              >
                Filtro
              </button>
            </form>
          </div>
        </div>
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-md rounded overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-900">
              <thead className="bg-gray-100 dark:bg-gray-900 dark:divide-gray-900">
                <tr>
                  <th
                    scope="col"
                    className="py-4 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Nome
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Role
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    Criado
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  >
                    status
                  </th>
                  <th
                    scope="col"
                    className="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-700 uppercase dark:text-gray-400"
                  ></th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-700 dark:divide-gray-900">
                <tr>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="assets/images/avatar.svg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          Jean marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                      Admin
                    </p>
                  </td>
                  <td className="px-4 py-4  bg-white dark:bg-gray-700 text-sm">
                    <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                      12/09/2020
                    </p>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200  rounded-full"
                      ></span>
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="assets/images/avatar.svg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          Marcus coco
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                      Designer
                    </p>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                      01/10/2012
                    </p>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200  rounded-full"
                      ></span>
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="assets/images/avatar.svg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          Ecric marc
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                      Developer
                    </p>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                      02/10/2018
                    </p>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200  rounded-full"
                      ></span>
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
                <tr>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <a href="#" className="block relative">
                          <img
                            alt="profil"
                            src="assets/images/avatar.svg"
                            className="mx-auto object-cover rounded-full h-10 w-10 "
                          />
                        </a>
                      </div>
                      <div className="ml-3">
                        <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                          Julien Huger
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                      User
                    </p>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <p className="text-gray-900 dark:text-white whitespace-no-wrap">
                      23/09/2010
                    </p>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                      <span
                        aria-hidden="true"
                        className="absolute inset-0 bg-green-200  rounded-full"
                      ></span>
                      <span className="relative">active</span>
                    </span>
                  </td>
                  <td className="px-4 py-4 bg-white dark:bg-gray-700 text-sm">
                    <a
                      href="#"
                      className="text-indigo-600 hover:text-indigo-900 dark:text-indigo-400 "
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="border-t dark:border-gray-900 px-5 bg-white dark:bg-gray-700 py-5 flex flex-col xs:flex-row items-center xs:justify-between">
              <div className="flex items-center">
                <button
                  type="button"
                  className="w-full p-4 border text-base rounded-l-xl text-gray-600 bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-100"
                >
                  <svg
                    width={9}
                    fill="currentColor"
                    height={8}
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1427 301l-531 531 531 531q19 19 19 45t-19 45l-166 166q-19 19-45 19t-45-19l-742-742q-19-19-19-45t19-45l742-742q19-19 45-19t45 19l166 166q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-indigo-500 dark:text-indigo-300 bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-100"
                >
                  1
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base text-gray-600 bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-100"
                >
                  2
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border-t border-b text-base text-gray-600 bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-100"
                >
                  3
                </button>
                <button
                  type="button"
                  className="w-full px-4 py-2 border text-base text-gray-600 bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-100"
                >
                  4
                </button>
                <button
                  type="button"
                  className="w-full p-4 border-t border-b border-r text-base  rounded-r-xl text-gray-600 bg-white dark:bg-gray-700 dark:text-white hover:bg-gray-100"
                >
                  <svg
                    width={9}
                    fill="currentColor"
                    height={8}
                    className=""
                    viewBox="0 0 1792 1792"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
