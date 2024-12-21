import { useEffect, useState } from 'react';

const availableCats = [
  { name: 'Whiskers', age: 2, breed: 'Persian' },
  { name: 'Mittens', age: 2, breed: 'Bengal' },
  { name: 'Shadow', age: 1, breed: 'Sphynx' },
  { name: 'Pumpkin', age: 3, breed: 'Abyssinian' },
  { name: 'Nova', age: 4, breed: 'Siamese' },
  { name: 'Simba', age: 2, breed: 'Birman' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [breedFilter, setBreedFilter] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) => res.json())
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  const filteredCats = cats.filter(
    (cat) =>
      (breedFilter === '' || cat.breed === breedFilter) &&
      (nameFilter === '' || cat.name.toLowerCase().includes(nameFilter.toLowerCase()))
  );

  return (
    <section>
      <h2>Available Cats</h2>
      <div className="filters d-flex gap-3 mb-4">
        <select onChange={(e) => setBreedFilter(e.target.value)} className="form-select">
          <option value="">All Breeds</option>
          <option value="Sphynx">Sphynx</option>
          <option value="Peterbald">Peterbald</option>
          <option value="Birman">Birman</option>
          <option value="Abyssinian">Abyssinian</option>
          <option value="Persian">Persian</option>
          <option value="Bengal">Bengal</option>
          <option value="Siamese">Siamese</option>
        </select>
        <input
          type="text"
          placeholder="Search by name"
          onChange={(e) => setNameFilter(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="row g-4">
        {filteredCats.map((cat, index) => (
          <div key={index} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{ borderRadius: '8px', height: '200px', objectFit: 'cover' }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
