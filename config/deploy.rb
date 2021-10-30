# config valid only for current version of Capistrano
lock '3.4.1'

set :application, 'japanese-texter'
set :repo_url,    "ssh://git@github.com/FabianLiebl/japanese-texter.git"
set :deploy_to,   "/www/htdocs/w01a4a20/japanese-texter.start-page.de/"
set :linked_files, fetch(:linked_files, []).push('.env.local')
set :linked_dirs, fetch(:linked_dirs, []).push('var/media').push('var/sessions').push('var/backups').push('var/backups-tmp').push('var/log')
set :composer_install_flags, '--no-dev --no-interaction --optimize-autoloader'
set :keep_releases, 5
set :file_permissions_chmod_mode, "0775"
set :file_permissions_paths, ["var/media", "var/cache", "var/log", "var", "var/sessions", "var/backups", "var/backups-tmp"]
set :file_permissions_groups, ["www-data"]
set :use_sudo, false
set :branch, ENV['BRANCH'] if ENV['BRANCH']

SSHKit.config.command_map[:php] = "php74"
SSHKit.config.command_map[:composer] = "php74 #{shared_path.join("composer.phar")}"
SSHKit.config.command_map[:cachetool] = "php74 #{shared_path.join("cachetool.phar")}"

namespace :deploy do
  after :starting, 'composer:install_executable'
end

namespace :deploy do
  task :migrate do
    on roles(:db) do
      symfony_console('doctrine:migrations:migrate', '--no-interaction')
      symfony_console('enhavo:init', '--no-interaction')
    end
  end
  task :routes do
    on roles(:db) do
      execute "cd '#{release_path}'; php74 bin/console fos:js-routing:dump --format=json --target=public/js/fos_js_routes.json"
    end
  end
#   task :webpack do
#     on roles(:db) do
#       execute "cd '#{release_path}'; yarn encore prod"
#     end
#   end
#   task :webpack_build do
#     on roles(:db) do
#       upload! "public/build", "#{release_path}/public", recursive: true
#     end
#   end
end

after 'deploy:updated', 'symfony:assets:install'
# after "deploy:updated", "deploy:webpack_build"
after "deploy:updated", "deploy:routes"
before "deploy:publishing", "deploy:migrate"
