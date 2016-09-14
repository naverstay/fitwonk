<?php

namespace common\widgets\DialogListWidget\assets;

use yii\web\AssetBundle;

class DialogListWidgetAsset extends AssetBundle
{

    public $js = [
        "js/DialogListWidget.js"
    ];

    public function init()
    {
        $this->sourcePath = __DIR__;
        parent::init();
    }

    public $depends = [
        'yii\web\YiiAsset',
    ];
}