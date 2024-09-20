"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const AdminDashBoard = () => {
  // State for bike information
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [area, setArea] = useState("");
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);

  // Handle image selection
  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setUploading(true);

      // Step 1: Upload image to imgbb
      const formData = new FormData();
      formData.append("image", image);

      const imgbbResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=44e895f22bffc4ba524fc93392eca17a`,
        formData
      );

      const imageUrl = imgbbResponse.data.data.url;

      // Step 2: Send data to backend
      const bikeData = {
        bike: {
          name,
          price,
          area,
          image: imageUrl,
        },
      };

      const backendResponse = await axios.post(
        "http://localhost:8099/api/create-bike",
        bikeData
      );

      console.log("Backend response: ", backendResponse.data);

      // Clear inputs and state
      setName("");
      setPrice("");
      setArea("");
      setImage(null);
      setUploading(false);
      setReload(!reload);
      alert("Bike added successfully!");
    } catch (error) {
      console.error("Error uploading image or saving data:", error);
      setUploading(false);
    }
  };

  // Fetch all bikes using axios
  const fetchBikes = async () => {
    try {
      const response = await axios.get("http://localhost:8099/api/getAllBike");
      return response.data;
    } catch (error) {
      console.error("Error fetching bikes:", error);
      throw error;
    }
  };

  // Function to delete a bike using axios
  const deleteBike = async (bikeId) => {
    try {
      await axios.delete(`http://localhost:8099/api/deleteBike/${bikeId}`);
      return true;
    } catch (error) {
      console.error("Error deleting bike:", error);
      throw error;
    }
  };

  const [bikes, setBikes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reload, setReload] = useState(false);

  // Fetch bikes on component mount
  useEffect(() => {
    const loadBikes = async () => {
      setLoading(true);
      try {
        const data = await fetchBikes();
        setBikes(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    loadBikes();
  }, [reload]);

  // Handle delete bike
  const handleDelete = async (bikeId) => {
    if (window.confirm("Are you sure you want to delete this bike?")) {
      try {
        await deleteBike(bikeId);
        setBikes((prevBikes) =>
          prevBikes.filter((bike) => bike._id !== bikeId)
        );
        alert("Bike deleted successfully!");
      } catch (error) {
        alert("Failed to delete bike.");
      }
    }
  };

  // Function to update a bike
  const updateBike = async (bikeId) => {
    try {
      setUploading(true);

      // Step 1: Upload image to imgbb
      const formData = new FormData();
      formData.append("image", image);

      const imgbbResponse = await axios.post(
        `https://api.imgbb.com/1/upload?key=44e895f22bffc4ba524fc93392eca17a`,
        formData
      );

      const imageUrl = imgbbResponse.data.data.url;

      // Step 2: Send data to backend
      const bikeData = {
        name,
        price,
        area,
        image: imageUrl,
      };

      const backendResponse = await axios.patch(
        `http://localhost:8099/api/updateBike/${bikeId}`,
        bikeData
      );

      console.log("Backend response: ", backendResponse.data);

      // Clear inputs and state
      setName("");
      setPrice("");
      setArea("");
      setImage(null);
      setUploading(false);
      setReload(!reload);
      alert("Bike updated successfully!");
    } catch (error) {
      console.error("Error uploading image or saving data:", error);
      setUploading(false);
    }
  };

  return (
    <div className="h-screen">
      <div className="py-[15px] flex items-center justify-center gap-4">
        <h1 className="py-[7px] text-center text-2xl font-semibold ">
          Manage Bikes
        </h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add new Bike</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add new Bike</DialogTitle>
              <DialogDescription>
                Enter the details for the new bike. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <Input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="price" className="text-right">
                  Price
                </Label>
                <Input
                  id="price"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="area" className="text-right">
                  Area
                </Label>
                <Input
                  id="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="image" className="text-right">
                  Upload Image
                </Label>
                <Input
                  id="image"
                  type="file"
                  onChange={handleImageChange}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" onClick={handleSubmit} disabled={uploading}>
                {uploading ? "Uploading..." : "Save changes"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div>
        <div className="h-screen">
          <div className="py-[15px]"></div>
          <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {bikes.map((bike) => (
              <div key={bike._id} className="border shadow-md p-4 rounded-md">
                <img
                  src={bike.image}
                  alt={bike.name}
                  className="w-full h-32 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{bike.name}</h2>
                <p>Price: {bike.price}</p>
                <p>Area: {bike.area}</p>
                <div className="flex justify-between mt-4">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Edit</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Edit Bike</DialogTitle>
                        <h1>id: {bike._id}</h1>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="name" className="text-right">
                            Name
                          </Label>
                          <Input
                            id="name"
                            value={name}
                            defaultValue={bike?.name}
                            onChange={(e) => setName(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="price" className="text-right">
                            Price
                          </Label>
                          <Input
                            id="price"
                            defaultValue={bike?.price}
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="area" className="text-right">
                            Area
                          </Label>
                          <Input
                            id="area"
                            defaultValue={bike?.area}
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="image" className="text-right">
                            Upload Image
                          </Label>
                          <Input
                            id="image"
                            type="file"
                            onChange={handleImageChange}
                            className="col-span-3"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button
                          type="submit"
                          onClick={() => updateBike(bike._id)}
                          disabled={uploading}
                        >
                          {uploading ? "Uploading..." : "Save changes"}
                        </Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(bike._id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashBoard;
