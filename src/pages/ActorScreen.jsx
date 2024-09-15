import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import { motion } from "framer-motion";
import { pageVariants, pageTransition } from "../utils/motionConfig";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

const ActorScreen = () => {
  const { id } = useParams();
  const [actor, setActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Fetch actor details by ID
  useEffect(() => {
    const fetchActorDetails = async () => {
      try {
        const actorResponse = await axios.get(
          `${BASE_URL}/person/${id}?api_key=${API_KEY}`
        );
        setActor(actorResponse.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching actor details:", err);
        setError(true);
        setLoading(false);
      }
    };

    fetchActorDetails();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <Error />;

  if (!actor) return <p>No actor details found.</p>;

  const {
    name,
    biography,
    birthday,
    profile_path,
    known_for_department,
    place_of_birth,
  } = actor;

  // Actor Image URL
  const actorImageUrl = profile_path
    ? `https://image.tmdb.org/t/p/w500${profile_path}`
    : "https://via.placeholder.com/185x278.png?text=No+Image";

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="relative text-white"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{ backgroundImage: `url(${actorImageUrl})` }}
      >
        <div className="w-full h-full bg-gradient-to-t from-black to-transparent"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto py-6 px-4 mt-22">
        <div className="flex flex-col md:flex-row items-start mt-14">
          {/* Actor Image */}
          <div className="w-full md:w-1/3 lg:w-1/4 mt-8">
            <img
              src={actorImageUrl}
              alt={name}
              className="w-full h-auto rounded-lg shadow-xl border-4 border-yellow-500"
            />
          </div>

          {/* Actor Details */}
          <div className="md:ml-6 flex-1 mt-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2">{name}</h1>
            <p className="text-xl text-gray-400 mb-4">{known_for_department}</p>
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-white">Birthday:</strong>{" "}
              {birthday || "N/A"}
            </p>
            <p className="text-lg text-gray-300 mb-4">
              <strong className="text-white">Place of Birth:</strong>{" "}
              {place_of_birth || "N/A"}
            </p>

            <h2 className="text-3xl font-semibold mt-6 mb-4">Biography</h2>
            <p className="text-gray-300 leading-relaxed">
              {biography || "Biography not available."}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ActorScreen;
