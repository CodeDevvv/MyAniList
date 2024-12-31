import { supabase } from "../../supabaseClient";

export const addAnime = async (title, rating, imageUrl) => {
  const { data, error } = await supabase.from('anime_list').insert([
    { title, rating, image_url: imageUrl },
  ]);
  return { data, error };
};


export const fetchAnimeList = async () => {
    const { data, error } = await supabase.from('anime_list').select('*');
    return { data, error };
  };
  