import { Knex } from 'knex';

export async function seed(knex: Knex) {
    await knex('items').insert([
        { title: "Papeis e Papelão", image: "papel.png" },
        { title: "Vidros e Lâmpadas", image: "vidros.png" },
        { title: "Óleo de Cozinha", image: "Oleo.png" },
        { title: "Resíduos Orgânicos", image: "organico.png" },
        { title: "Baterias e Pilhas", image: "bateria.png" },
        { title: "Electônicos", image: "electronicos.png" },
    ])
}