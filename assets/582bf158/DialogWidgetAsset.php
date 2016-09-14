<?php

namespace common\widgets\DialogWidget\assets;

use yii\web\AssetBundle;

class DialogWidgetAsset extends AssetBundle
{

    public $js = [
        "js/DialogWidget.js"
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
