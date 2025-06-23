const AddEmployees = () => {
  
    return (
      <div className="w-full min-h-[calc(100vh-40px)] flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50">
        <form>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="name" className="block text-gray-600">
                  Employe Name
                </label>
                <input
                  className="w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="name"
                  id="name"
                  type="text"
                  placeholder=" Emplyee name"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="Postion" className="block text-gray-600">
                  Position
                </label>
                <input
                  className="w-full px-4 py-3 text-white  border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="Position"
                  id="Position"
                  type="text"
                  placeholder="Position"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor=" DACOID" className="block text-gray-600">
                  DACO ID
                </label>
                <input
                  className="w-full px-4 py-3 text-white  border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="DACOID"
                  id="DACOID"
                  type="text"
                  placeholder="DACO ID"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor=" SAPID" className="block text-gray-600">
                  SAP ID
                </label>
                <input
                  className="w-full px-4 py-3 border text-white border-rose-300 focus:outline-rose-500 rounded-md "
                  name="SAPID"
                  id="SAPID"
                  type="number"
                  placeholder="SAP ID"
                  required
                />
              </div>
              <div className="space-y-1 text-sm">
                <label htmlFor="group" className="block text-gray-600">
                  Group
                </label>
                <select
                  required
                  className="w-full px-4 py-3 border-rose-300 focus:outline-rose-500 rounded-md"
                  name="group"
                ></select>
              </div>
              <div className="space-y-1">
                <label htmlFor="location" className="block text-gray-600">
                  Select Availability Range
                </label>
                {/* Calender */}
              </div>
            </div>
            <div className="space-y-6">
              <div className="space-y-1 text-sm">
                <label htmlFor="title" className="block text-gray-600">
                  Title
                </label>
                <input
                  className="w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md "
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Title"
                  required
                />
              </div>

              <div className=" p-4 bg-white w-full  m-auto rounded-lg">
                {/* imge section here */}
                {/* <div className="file_upload px-5 py-3 relative border-4 border-dotted border-gray-300 rounded-lg">
                  <div className="flex flex-col w-max mx-auto text-center">
                    <label>
                      <input
                        className="text-sm cursor-pointer w-36 hidden"
                        type="file"
                        name="image"
                        id="image"
                        accept="image/*"
                        hidden
                      />
                      <div className="bg-rose-500 text-white border border-gray-300 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-rose-500">
                        Upload Image
                      </div>
                    </label>
                  </div>
                </div> */}
              </div>
              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="price" className="block text-gray-600">
                    Iqama Number
                  </label>
                  <input
                    className="w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="IqamaNumber"
                    id="Iqama Number"
                    type="number"
                    placeholder="Iqama Number"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="Mobile" className="block text-gray-600">
                    Mobile
                  </label>
                  <input
                    className="w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="Mobile"
                    id="Mobile"
                    type="number"
                    placeholder="Mobile"
                    required
                  />
                </div>
              </div>

              <div className="flex justify-between gap-2">
                <div className="space-y-1 text-sm">
                  <label htmlFor="Email" className="block text-gray-600">
                    Email
                  </label>
                  <input
                    className="w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="Email"
                    id="Email"
                    type="Email"
                    placeholder="Email"
                    required
                  />
                </div>

                <div className="space-y-1 text-sm">
                  <label htmlFor="	Nationality" className="block text-gray-600">
                    Nationality
                  </label>
                  <input
                    className="w-full px-4 py-3 text-white border border-rose-300 focus:outline-rose-500 rounded-md "
                    name="Nationality"
                    id="Nationality"
                    type="text"
                    placeholder="Nationality"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-rose-500"
          >
            Save & Continue
          </button>
        </form>
      </div>
    );
};

export default AddEmployees;