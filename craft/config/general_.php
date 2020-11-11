<?php

return array(
  '*' => array(

    'useCompressedJs' => true,
    'allowAutoUpdates' => false,
    'generateTransformsBeforePageLoad' => true,
    'omitScriptNameInUrls' => true,
    'defaultImageQuality' => 75,
    'maxUploadFileSize' => 16000000,
    'limitAutoSlugsToAscii' => true,
    'convertFilenamesToAscii' => true,
    'enableTemplateCaching' => true,
    'jsLoggerEnabled' => true,
    'jsBasePath' => '/assets/build/js/',
    'enableCsrfProtection' => false,
    'useEmailAsUsername' => true,
    'autoLoginAfterAccountActivation' => true,
    'defaultSearchTermOptions' => array(
  	  'subLeft' => true,
			'subRight' => true,
		),
    'defaultWeekStartDay' => 1

  ),

  'local' => array(
    'devMode' => 1,
    'useCompressedJs' => false,
    'allowAutoUpdates' => true,
    'enableTemplateCaching' => true,

    'environment' => 'local',
    'siteUrl' => array(
            'no' => 'http://credo.craft.dev/'
          ),

    'environmentVariables' => array(
      'fileSystemPath' => $_SERVER['DOCUMENT_ROOT'] . '/',
      'publicRootPath' => ''
    ),
    'jsBasePath' => '/assets/src/js/',
  ),

  'stage' => array(
    'environment' => 'stage',
    'siteUrl' => 'http://credo.skogen.io/',

                // on forge servers
    // 'cacheMethod' => 'redis',

    'environmentVariables' => array(
      'fileSystemPath' => '',
      'publicRootPath' => ''
    ),
  ),

  'prod' => array(
    'devMode' => 0,

    'environment' => 'prod',
    'siteUrl' => array(
      'no' => 'http://www.restaurantcredo.no/',
      'en' => 'http://www.restaurantcredo.no/en/'
    ),

    'environmentVariables' => array(
      'fileSystemPath' => '',
      'publicRootPath' => ''
    ),
    'jsLoggerEnabled' => false
  )
);
