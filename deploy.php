<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'footballfc.com');

// Project repository
set('repository', 'git@github.com:fafabedo/footballapp.git');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true);

set('branch', 'develop');
set('keep_releases', 3);
set('clear_paths', []);

// Shared files/dirs between deploys
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server
set('http_user', 'www-data');
set('writable_dirs', []);

// Hosts
set('default_stage', 'prod');
host('footballfc.com')
  ->stage('prod')
  ->user('webdeploy')
  ->identityFile('~/.ssh/id_rsa')
  ->forwardAgent(true)
  ->set('deploy_path', '/var/www/{{application}}');

// Tasks
task('ng:build', '
  /usr/bin/yarn
  /usr/bin/ng build --prod
');

desc('Deploy FootballFC.com');
task('deploy', [
  'deploy:info',
  'deploy:prepare',
  'deploy:lock',
  'deploy:release',
  'deploy:update_code',
  'deploy:shared',
  'deploy:writable',
  'deploy:clear_paths',
  'deploy:symlink',
  'deploy:unlock',
  'cleanup',
  'success',
  'ng:build'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
