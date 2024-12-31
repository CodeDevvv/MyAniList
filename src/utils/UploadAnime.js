import { supabase } from "../../supabaseClient";
import { addAnime } from "./api"; // AddAnime logic should be present in utils/api

export const uploadAnime = async (title, rating, file) => {
  if (!title) {
    throw new Error("Anime title is required!");
  }
  if (!file) {
    throw new Error("Please select an image!");
  }
  if (file.size > 50 * 1024) {
    throw new Error("Image must be less than 50KB!");
  }

  const uniqueFileName = `public/image_${Date.now()}.jpg`;

  const { data: uploadData, error: uploadError } = await supabase.storage
    .from("images")
    .upload(uniqueFileName, file);

  if (uploadError) throw uploadError;

  const { data: publicUrlData, error: publicUrlError } = supabase.storage
    .from("images")
    .getPublicUrl(uniqueFileName);

  if (publicUrlError) throw publicUrlError;

  const imageUrl = publicUrlData.publicUrl;

  const { data, error } = await addAnime(title, rating, imageUrl);

  if (error) throw error;

  return data;
};
