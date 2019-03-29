
exports.seed = function (knex) {
  return knex('projects').insert([
    { name: 'Ruby on Rails App', project_description: 'Todo Application', finished: false },
    { name: 'Recipe Database', project_description: 'A place to store your favorite recipes and make shopping lists from them!', finished: false },
    { name: 'Cat Video App', project_description: "A webapp that scrapes and servers the internet's most precious resource ... cat videos", finished: true }
  ]);
};
