import React from "react";
const i = -1;
export default function Preview({ pokemon1, pokemon2 }) {
  return (
    <div className="preview">
      <div>
        <h4>Name</h4>
        <h4>Height</h4>
        <br />
        <h4>Sprite</h4>
        <br />
        <h4>Hp</h4>
        <h4>Attack</h4>
        <h4>Defense</h4>
        <h4>S-Attack</h4>
        <h4>S-Defense</h4>
        <h4>Speed</h4>
      </div>
      <div>
        <h4>{pokemon1.name}</h4>
        <h4
          style={{ color: pokemon1.height > pokemon2.height ? "green" : "red" }}
        >
          {pokemon1.height}
        </h4>
        <img src={pokemon1.sprites.front_default} alt="" />
        {pokemon1.stats.map((stat) => {
          return (
            <h4
              style={{
                color:
                  pokemon2.stats[i + 1].base_stat < stat.base_stat
                    ? "green"
                    : "red",
              }}
            >
              {stat.base_stat}
            </h4>
          );
        })}
      </div>
      <div>
        <h4>{pokemon2.name}</h4>
        <h4
          style={{ color: pokemon1.height < pokemon2.height ? "green" : "red" }}
        >
          {pokemon2.height}
        </h4>
        <img src={pokemon2.sprites.front_default} alt="" />
        {pokemon2.stats.map((stat) => {
          return (
            <h4
              style={{
                color:
                  pokemon1.stats[i + 1].base_stat < stat.base_stat
                    ? "green"
                    : "red",
              }}
            >
              {stat.base_stat}
            </h4>
          );
        })}
      </div>
    </div>
  );
}
