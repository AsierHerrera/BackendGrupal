import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Побудова шляху до weapons.json відносно теки controllers
const weaponsFilePath = path.resolve(__dirname, '..', '..', 'DataBase', 'weapons.json');

async function getAll() {
    try {
        const weaponsData = fs.readFileSync(weaponsFilePath, 'utf8');
        return JSON.parse(weaponsData);
    } catch (error) {
        console.error('Error loading weapons:', error);
        return [];
    }
}

async function getById(id) {
    const weapons = await getAll();
    const weapon = weapons.find(weapon => weapon.Weapon_id === parseInt(id));
    if (!weapon) {
        return { error: 'No weapon found' };
    }
    return { data: weapon };
}

async function create(weaponData) {
    const weapons = await getAll();
    const newWeapon = {
        Weapon_id: weapons.length + 1,
        ...weaponData
    };
    weapons.push(newWeapon);
    try {
        fs.writeFileSync(weaponsFilePath, JSON.stringify(weapons));
        return { data: newWeapon };
    } catch (error) {
        console.error('Error saving weapons:', error);
        return { error: 'Error request saving weapons' };
    }
}

async function update(id, weaponData) {
    const weapons = await getAll();
    const index = weapons.findIndex(weapon => weapon.Weapon_id === parseInt(id));
    if (index === -1) {
        return { error: 'Cannot find weapon' };
    }
    weapons[index] = {
        Weapon_id: parseInt(id),
        ...weaponData
    };
    try {
        fs.writeFileSync(weaponsFilePath, JSON.stringify(weapons));
        return { data: weapons[index] };        
    }
    catch (error) {
        console.error('Error writing to file:', error);
        return { error: 'Error writing to file' };
    }

}

async function remove(id) {
    const weapons = await getAll();
    const index = weapons.findIndex(weapon => weapon.Weapon_id === parseInt(id));
    if (index === -1) {
        return { error: 'Cannot find weapon' };
    }
    const removedWeapon = weapons.splice(index, 1)[0];
    try {
        fs.writeFileSync(weaponsFilePath, JSON.stringify(weapons));
        return { data: removedWeapon };
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
