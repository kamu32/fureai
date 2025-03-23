import React from 'react';
interface Animal {
    id: number;
    animal_img: string;
    type?: string;
    animal_age?: string;
    animal_vaccine?: string;
    animal_name: string;
    animal_gender: string;
    animal_address: string;
}
interface SatooyaListProps {
    animals: Animal[];
}
const SatooyaListFillter: React.FC<SatooyaListProps> = ({ animals }) => {
    return (
        <div className="satooya-list">
            {animals.length === 0 ? (
                <p>現在は募集していません</p>
            ) : (
                animals.map(animal => (
                    <a key={animal.id} href={`/satooya/${animal.id}`}>
                        <div className="animal-card">
                            <div className="animal-img">
                                <img src={`./img/Animals/animal-img/${animal.animal_img}`} alt={animal.animal_name} />
                            </div>
                            <div className="tags">
                                {animal.type && <div className="animal-tag">{animal.type}</div>}
                                {animal.animal_age && <div className="animal-tag">{animal.animal_age}</div>}
                                {animal.animal_vaccine && <div className="animal-tag">{animal.animal_vaccine}</div>}
                            </div>
                            <div className="animal-name">
                                <h2>{animal.animal_name} {animal.animal_gender}</h2>
                            </div>
                            <div className="animal-address">
                                <p>{animal.animal_address}</p>
                            </div>
                        </div>
                    </a>
                ))
            )}
        </div>
    );
};
export default SatooyaListFillter;