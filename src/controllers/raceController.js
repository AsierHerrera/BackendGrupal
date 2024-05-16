import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const racesFilePath = path.resolve(__dirname, '..', '..', 'DataBase', 'race.json');

async function getAll() {
    try {
        const racesData = fs.readFileSync(racesFilePath, 'utf8');
        return JSON.parse(racesData);
    } catch (error) {
        console.error('Error loading races:', error);
        return [];
    }
}

async function getById(id) {
    const races = await getAll();
    const race = races.find(race => race.Race_id === parseInt(id));
    if (!race) {
        return { error: 'No race found' };
    }
    return { data: race };
}

async function create(raceData) {
    const races = await getAll();
    const newrace = {
        Race_id: races.length + 1,
        ...raceData
    };
    races.push(newrace);
    try {
        fs.writeFileSync(racesFilePath, JSON.stringify(races));
        return { data: newrace };
    } catch (error) {
        console.error('Error saving races:', error);
        return { error: 'Error request saving races' };
    }       
}

async function update(id, raceData) {
    const races = await getAll();
    const index = races.findIndex(race => race.Race_id === parseInt(id));
    if (index === -1) {
        return { error: 'Cannot find race' };
    }
    races[index] = {
        Race_id: parseInt(id),
        ...raceData
    };
    try {
        fs.writeFileSync(racesFilePath, JSON.stringify(races));
        return { data: races[index] };        
    }
    catch (error) {
        console.error('Error writing to file:', error);
        return { error: 'Error writing to file' };
    }

}

async function remove(id) {
    const races = await getAll();
    const index = races.findIndex(race => race.Race_id === parseInt(id));
    if (index === -1) {
        return { error: 'Cannot find race' };
    }
    const removedrace = races.splice(index, 1)[0];
    try {
        fs.writeFileSync(racesFilePath, JSON.stringify(races));
        return { data: removedrace };
    } catch (error) {
        console.error('Error writing to file:', error);
        return { error: 'Error writing to file' };
    }   
}


export {
    getAll,
    getById,
    create,
    update,
    remove
};

export default {
    getAll,
    getById,
    create,
    update,
    remove
};
