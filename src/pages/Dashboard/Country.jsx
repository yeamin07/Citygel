import DefaultLayout from "components/Dashboard/layout/DefaultLayout";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import Dashtable from "components/Dashboard/DashTable/Dashtable";
import { useEffect, useState } from "react";
import { Modal, message } from "antd";
import TextField from "@mui/material/TextField";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "firebase.init";
import useAxios from "config/api/useAxios";
import { toast } from "react-toastify";
import axios, { BASE_URL } from "config/api/axios";

const Country = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const api = useAxios();
  const [user1] = useAuthState(auth);
  const [CountryName, setCountryName] = useState("");
  const [state, setState] = useState({});
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [countryCode, setCountryCode] = useState("");
  const [CountryNameError, setCountryNameError] = useState("");
  const [editingCountry, setEditingCountry] = useState(null);
  const handleSubmit = async (item) => {
    if (!selectedCountry.trim()) {
      setCountryNameError("country name is required");
      return;
    }

    // Reset error state
    setCountryNameError("");

    // Collect all the details here and perform any necessary actions
    const formData = {
      name: selectedCountry,
      state: selectedSubcategories,
      countryCode: countryCode,
    };
    console.log("Form Data:", formData);
    if (editingCountry) {
      const updateCountry = await api.patch(
        `country/${editingCountry.name}/`,
        formData,
      );
      if (updateCountry.data) {
        toast("Country updated successfully");
        fetchUser();
        handleOk();
      }
    } else {
      const addCountry = await api.post("/country", formData);
      if (addCountry.data) {
        toast("country added successfully");
        fetchUser();
        handleOk();
      }
    }
    // Close the modal
  };
  const [Country, setCountry] = useState([]);
  const [subCountry, setSubCountry] = useState([]);
  const fetchUser = async () => {
    const getAllCountry = await api.get("/country");
    const getAllsubCountry = await api.get("/state");
    setCountry(getAllCountry.data.data);
    setSubCountry(getAllsubCountry.data.data);
  };
  useEffect(() => {
    fetchUser();
  }, []);

  console.log(Country, subCountry);
  const deleteItem = async (name) => {
    const verifyresponse = await api.delete(`/country/${name}/`);
    if (verifyresponse.data) {
      fetchUser();
      message.success("delete Successfully");
    }
  };
  const editUser = async (name) => {
    const verifyresponse = await api.patch(`/country/${name}/`);
    if (verifyresponse.data) {
      fetchUser();
      message.success("edit Successfully");
    }
  };

  const showModal = (Country) => {
    if (Country) {
      console.log(Country);
      setEditingCountry(Country);
      setSelectedCountry(Country.name);
      setState(Country.state);
    } else {
      setEditingCountry(null);
      setCountryName("");
      setSelectedSubcategories([]);
    }

    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries/states")
      .then((response) => {
        console.log(response.data.data);
        setCountries(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
    axios
      .get(`${BASE_URL}/state`)
      .then((response) => {
        setState(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = (event) => {
    const selectedIndex = event.target.selectedIndex;
    const selectedOption = event.target.options[selectedIndex];
    const selectedCountryName = selectedOption.value;
    const selectedIso2 = selectedOption.getAttribute("data-iso2");
    const selectedOptionq = event.target.value;

    setSelectedCountry(selectedOptionq);
    setCountryCode(selectedIso2);
    console.log(selectedCountryName, selectedIso2);
    // Do something with selectedCountryName and selectedIso2
  };

  return (
    <DefaultLayout>
      <div className="container h-auto">
        {/*Add Country */}
        <div className="flex flex-col items-center justify-start gap-[14px] sm:justify-start sm:gap-[20px] md:flex-row">
          <p className="font-serif text-[16px] sm:text-[16px] lg:text-[25px]">
            Add Country:
          </p>
          <div className="">
            <button
              type="primary"
              className="rounded-2xl bg-gradient-to-r from-cyan-500 to-cyan-700  px-10 py-4 font-serif text-[14px] text-white-A700 lg:text-[18px]"
              onClick={() => showModal()}
            >
              Add Country
            </button>
            <Modal
              className="w-[6rem] sm:w-[100%]"
              title="Country"
              open={isModalOpen}
              onOk={handleSubmit}
              onCancel={handleCancel}
            >
              {/* <input type='text' placeholder='Enter Country Name' className='w-full md:w-full h-[45px] focus:rounded-[12px] focus:border-[1px] 
focus:border-solid focus:border-cyan-500 text-[13px] md:text-[18px] px-2 bg-cyan-200 rounded-[12px]' /> */}

              <div className="flex flex-col items-center sm:flex-row">
                <label htmlFor="country" className="mb-1 sm:mr-2">
                  Select a Country:
                </label>
                <select
                  id="country"
                  className="rounded-md border border-gray-300 px-4 py-2"
                  value={selectedCountry}
                  onChange={(event) => handleCountryChange(event)}
                >
                  <option value="">Select a country...</option>
                  {countries.map((country) => (
                    <option
                      key={country.iso2}
                      value={country.name}
                      data-iso2={country.iso2}
                    >
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/*~~~~~~~~~~end of country ~~~~~~~~~~~ */}
              <div className="mt-10 flex flex-col justify-start gap-[10px]">
                <p className="mb-[3px] text-[16px] font-medium">States:</p>
                <Stack
                  spacing={3}
                  sx={{ width: 500 }}
                  className="mb-7 w-[6rem] sm:w-[90%]"
                >
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={state}
                    getOptionLabel={(option) => option.name}
                    // defaultValue={[country[5]]}
                    className="w-[18rem] sm:w-[90%]"
                    value={selectedSubcategories}
                    onChange={(event, newValue) => {
                      setSelectedSubcategories(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Enter States"
                        placeholder="Select States"
                      />
                    )}
                  />
                </Stack>

                {/* <p className="mb-[3px] text-[16px] font-medium">Citys:</p>
                <Stack
                  spacing={3}
                  sx={{ width: 500 }}
                  className="mb-3 w-[6rem] sm:w-[90%]"
                >
                  <Autocomplete
                    multiple
                    id="tags-standard"
                    options={city}
                    getOptionLabel={(option) => option.title}
                    defaultValue={[city[5]]}
                    className="w-[18rem] sm:w-[90%]"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Enter City"
                        placeholder="Select City"
                        className="w-[3rem]"
                      />
                    )}
                  />
                </Stack> */}
              </div>
              {CountryNameError && (
                <p className="text-red-500">{CountryNameError}</p>
              )}
            </Modal>
          </div>
        </div>
        {/*~~~~~~~~~~~~~~~~DashTable~~~~~~~~~~~~~~ */}
        <div className="mt-10 mb-16 w-full">
          <Dashtable
            HeaderD="Country"
            FirstSec="Country"
            SecondSec="States"
            thirdSec="Ad"
            fourthSec="Time"
            fifthSec="Action"
            {...{ category: Country, deleteItem }}
            popup={showModal}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Country;
