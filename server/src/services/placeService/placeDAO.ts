import type Place from '@/types/Place';
import dbClient from '@/services/dbClient';

/**
 * Get nearest places DAO
 * @returns {Place[]} Array of places
 */
export const getNearestPlacesDAO = async (): Promise<Place[]> => {
  return await dbClient.places.findMany();
};

/**
 * Get single place DAO
 * @param {number} id ID of the place
 * @returns {Place} place object
 */
export const getSinglePlaceDAO = async (id: number): Promise<Place | null> => {
  return await dbClient.places.findFirst({ where: { id: id } });
};
