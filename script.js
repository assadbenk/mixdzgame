const elements = {
    earth: { name: 'أرض', icon: 'IMG/EARTH.png' },
    water: { name: 'ماء', icon: 'IMG/water.png' },
    fire: { name: 'نار', icon: 'IMG/fire.png' },
    air: { name: 'هواء', icon: 'IMG/air.png' },
    cloud: { name: 'سحاب', icon: 'IMG/cloud.png' },
    rain_cloud: { name: 'سحاب ممطر', icon: 'IMG/rain.webp' },
    plant: { name: 'نبات', icon: 'IMG/plant.png' },
    grass: { name: 'عشب', icon: 'IMG/grass.png' },
    tree: { name: 'شجرة', icon: 'IMG/tree.png' },
    volcano: { name: 'بركان', icon: 'IMG/volcano.png' },
    stone: { name: 'حجر', icon: 'IMG/stone.png' },
    wall: { name: 'جدار', icon: 'IMG/wall.png' },
    house: { name: 'بيت', icon: 'IMG/house.png' },
    city: { name: 'مدينة', icon: 'IMG/city.png' },
    energy: { name: 'طاقة', icon: 'IMG/energy.webp' },
    life: { name: 'حياة', icon: 'IMG/life.png' },
    sand: { name: 'رمل', icon: 'IMG/sand.png' },
    glass: { name: 'زجاج', icon: 'IMG/glass.png' },
    time: { name: 'وقت', icon: 'IMG/time.png' },
    human: { name: 'إنسان', icon: 'IMG/human.png' },
    sea: { name: 'بحر', icon: 'IMG/sea.png' },
    shark: { name: 'قرش', icon: 'IMG/shark.png' },
    kookleshark: { name: 'كوكولقرش', icon: 'IMG/coco.png' },
    glasses: { name: 'نظارات', icon: 'IMG/glasses.png' },
    educated_human: { name: 'إنسان متعلم', icon: 'IMG/ehuman.png' },
    intelligence: { name: 'ذكاء', icon: 'IMG/intj.png' },
    forest: { name: 'غابة', icon: 'IMG/forest.png' },
    animal: { name: 'حيوان', icon: 'IMG/animal.png' },
    stupidity: { name: 'غباء', icon: 'IMG/lowiq.png' },
    dinden_clash: { name: 'ديدين كلاش', icon: 'IMG/didine.png' },
    farmer: { name: 'فلاح', icon: 'IMG/farmer.png' },
    field: { name: 'حقل', icon: 'IMG/farm.png' },
    carrot: { name: 'جزر', icon: 'IMG/carrot.png' },
    staeif_world: { name: 'دنيا سطايفية', icon: 'IMG/dn.png' },
    planet: { name: 'كوكب', icon: 'IMG/planet.png' },
    sun: { name: 'شمس', icon: 'IMG/sun.png' },
    desert: { name: 'صحراء', icon: 'IMG/sahara.png' },
    bedouin: { name: 'بدي', icon: 'IMG/boudy.png' },
};

const combinations = {
    water: {
        fire: 'cloud',
        
        air: 'rain_cloud',
        water: 'sea',
    },
    fire: {
        water: 'cloud',
        earth: 'volcano',
        air: 'energy',
        sand: 'glass',
    },
    earth: {
        
        fire: 'volcano',
        air: 'dust',
        earth: 'planet',
    },
    air: {
        water: 'rain_cloud',
        fire: 'energy',
        earth: 'dust',
    },
    cloud: {
        water: 'rain_cloud',
    },
    rain_cloud: {
        earth: 'plant',
    },
    plant: {
        plant: 'grass',
        water: 'tree',
        energy: 'life',
    },
    tree: {
        tree: 'forest',
    },
    volcano: {
        water: 'stone',
    },
    stone: {
        stone: 'wall',
    },
    wall: {
        wall: 'house',
    },
    house: {
        house: 'city',
    },
    life: {
        earth: 'human',
        water: 'shark',
        forest: 'animal',
    },
    sand: {
        fire: 'glass',
    },
    glass: {
        glass: 'glasses',
    },
    human: {
        shark: 'kookleshark',
        plant: 'farmer',
        carrot: 'staeif_world',
        glasses: 'educated_human',
    },
    educated_human: {
        time: 'intelligence',
    },
    intelligence: {
        animal: 'stupidity',
    },
    stupidity: {
        human: 'dinden_clash',
    },
    farmer: {
        earth: 'field',
        field: 'carrot',
    },
    planet: {
        fire: 'sun',
    },
    sun: {
        earth: 'desert',
    },
    desert: {
        human: 'bedouin',
    },
    sea: {
        life: 'shark',
    },
    energy: {
        plant: 'life',
    },
    forest: {
        life: 'animal',
    },
    animal: {
        intelligence: 'stupidity',
    },
    time: {
        sand: 'glass',
    },
    glasses: {
        human: 'educated_human',
    },
    field: {
        farmer: 'carrot',
    },
    carrot: {
        human: 'staeif_world',
    },
    staeif_world: {
        // لا يوجد تفاعلات إضافية
    },
    kookleshark: {
        // لا يوجد تفاعلات إضافية
    },
    bedouin: {
        // لا يوجد تفاعلات إضافية
    },
    dinden_clash: {
        // لا يوجد تفاعلات إضافية
    },
};

const sounds = {
    tree: 'sounds/tree.mp3', // صوت عند اكتشاف شجرة
    volcano: 'sounds/volcano.mp3', // صوت عند اكتشاف بركان
    shark: 'sounds/shark.mp3', // صوت عند اكتشاف قرش
    // يمكنك إضافة المزيد من الأصوات هنا
};

let selectedElements = [];
let discoveredElements = ['earth', 'water', 'fire', 'air']; // العناصر الأساسية

document.querySelectorAll('.element').forEach(element => {
    element.addEventListener('dragstart', dragStart);
});

document.querySelectorAll('.drop-zone').forEach(zone => {
    zone.addEventListener('dragover', dragOver);
    zone.addEventListener('drop', drop);
    zone.addEventListener('dragenter', dragEnter);
    zone.addEventListener('dragleave', dragLeave);
});

document.getElementById('combine-btn').addEventListener('click', combineElements);

function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.dataset.element);
}

function dragOver(event) {
    event.preventDefault();
}

function dragEnter(event) {
    event.preventDefault();
    event.target.classList.add('drag-over');
}

function dragLeave(event) {
    event.target.classList.remove('drag-over');
}

function drop(event) {
    event.preventDefault();
    event.target.classList.remove('drag-over');
    const element = event.dataTransfer.getData('text/plain');
    if (selectedElements.length < 2) {
        selectedElements.push(element);
        event.target.innerHTML = `
            <div style="text-align: center;">
                <img src="${elements[element].icon}" alt="${elements[element].name}" class="element-icon" style="width: 80px; height: 80px;">
                <div>${elements[element].name}</div>
            </div>
        `;
    }
}

function combineElements() {
    if (selectedElements.length === 2) {
        const [element1, element2] = selectedElements;
        const result = combinations[element1]?.[element2] || combinations[element2]?.[element1];
        
        if (result) {
            const resultElement = document.getElementById('result-element');
            resultElement.innerHTML = `<img src="${elements[result].icon}" alt="${elements[result].name}" class="element-icon"> ${elements[result].name}`;
            
            if (!discoveredElements.includes(result)) {
                discoveredElements.push(result);
                addNewElement(result);

                // تشغيل الصوت إذا كان موجودًا
                if (sounds[result]) {
                    const audio = new Audio(sounds[result]);
                    audio.play();
                }
            }
        } else {
            document.getElementById('result-element').textContent = 'لا يوجد نتيجة';
        }
        
        selectedElements = [];
        document.querySelectorAll('.drop-zone').forEach(zone => {
            zone.textContent = '';
        });
    }
}

function addNewElement(elementKey) {
    const newElement = document.createElement('div');
    newElement.classList.add('element');
    newElement.setAttribute('data-element', elementKey);
    newElement.setAttribute('draggable', true);
    newElement.innerHTML = `<img src="${elements[elementKey].icon}" alt="${elements[elementKey].name}" class="element-icon"> ${elements[elementKey].name}`;
    newElement.addEventListener('dragstart', dragStart);
    document.querySelector('.elements').appendChild(newElement);
}