
exports.seed = function (knex) {
  return knex('actions').insert([
    { project_id: 1, action_description: 'Create database for Ruby app', notes: '', action_finished: false },
    { project_id: 2, action_description: 'Node recipe application database creation', notes: '', action_finished: true },
    { project_id: 2, action_description: 'Migrations for recipe application', notes: '', action_finished: true },
    { project_id: 2, action_description: 'Seeds for recipe application', notes: '', action_finished: true },
    { project_id: 2, action_description: 'Seeds for recipe application', notes: '', action_finished: true },
    { project_id: 2, action_description: 'Create all crud endpoints for recipe application', notes: '', action_finished: true },
    { project_id: 3, action_description: "Go to youtube, it's already been made", notes: '', action_finished: true },
  ]);
};
