 import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const mapesFilePath = path.resolve(__dirname, '..', '..', 'DataBase', 'maps.json');

async function getAll() {
    try {
        const mapesData = fs.readFileSync(mapesFilePath, 'utf8');
        return JSON.parse(mapesData);
    } catch (error) {
        console.error('Error loading mapes:', error);
        return [];
    }
}

 async function getById(id) {
    const mapes = await getAll();
    const map = mapes.find(map => map.Map_id === parseInt(id));
    if (!map) {
        return { error: 'No map found' };
    }
    return { data: map };       
 }

async function create(mapData) {
    const mapes = await getAll();
    const newMap = {
        Map_id: mapes.length + 1,
        ...mapData
    };
    mapes.push(newMap);
    try {
        fs.writeFileSync(mapesFilePath, JSON.stringify(mapes));
        return { data: newMap };
    } catch (error) {
        console.error('Error saving mapes:', error);
        return { error: 'Error request saving mapes' };
    }       
}

async function update(id, mapData) {
    const mapes = await getAll();
    const index = mapes.findIndex(map => map.Map_id === parseInt(id));
    if (index === -1) {
        return { error: 'Cannot find map' };
    }
    mapes[index] = {
        Map_id: parseInt(id),
        ...mapData
    };
    try {
        fs.writeFileSync(mapesFilePath, JSON.stringify(mapes));
        return { data: mapes[index] };
    }
    catch (error) {
        console.error('Error writing to file:', error);
        return { error: 'Error writing to file' };
    }
}

async function remove(id) {
    const mapes = await getAll();
    const index = mapes.findIndex(map => map.Map_id === parseInt(id));
    if (index === -1) {
        return { error: 'Cannot find map' };    
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
