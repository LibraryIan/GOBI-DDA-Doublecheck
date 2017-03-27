//Credit to Eric Bailey of Millenials to Snake People (https://github.com/ericwbailey/millennials-to-snake-people)
function walk(rootNode)
{
    // Find all the text nodes in rootNode
    var walker = document.createTreeWalker(
        rootNode,
        NodeFilter.SHOW_TEXT,
        null,
        false
    ),
    node;

    // Modify each text node's value
    while (node = walker.nextNode()) {
        handleText(node);
    }
}

function handleText(textNode) {
  textNode.nodeValue = replaceText(textNode.nodeValue);
}

function replaceText(v)
{
    v = v.replace(/\b9783959940016\b/g, '9783959940016******JSTOR DDA***************');
v = v.replace(/\b9780815728443\b/g, '9780815728443******JSTOR DDA***************');
v = v.replace(/\b9781506409016\b/g, '9781506409016******JSTOR DDA***************');
v = v.replace(/\b9780231543569\b/g, '9780231543569******JSTOR DDA***************');
v = v.replace(/\b9780300225280\b/g, '9780300225280******JSTOR DDA***************');
v = v.replace(/\b9780520967373\b/g, '9780520967373******JSTOR DDA***************');
v = v.replace(/\b9781785703225\b/g, '9781785703225******JSTOR DDA***************');
v = v.replace(/\b9780773550032\b/g, '9780773550032******JSTOR DDA***************');
v = v.replace(/\b9781782049371\b/g, '9781782049371******JSTOR DDA***************');
v = v.replace(/\b9781785704840\b/g, '9781785704840******JSTOR DDA***************');
v = v.replace(/\b9781785704888\b/g, '9781785704888******JSTOR DDA***************');
v = v.replace(/\b9781785704925\b/g, '9781785704925******JSTOR DDA***************');
v = v.replace(/\b9781785703027\b/g, '9781785703027******JSTOR DDA***************');
v = v.replace(/\b9781783081837\b/g, '9781783081837******JSTOR DDA***************');
v = v.replace(/\b9781452953267\b/g, '9781452953267******JSTOR DDA***************');
v = v.replace(/\b9781911307433\b/g, '9781911307433******JSTOR DDA***************');
v = v.replace(/\b9781785703300\b/g, '9781785703300******JSTOR DDA***************');
v = v.replace(/\b9781785702983\b/g, '9781785702983******JSTOR DDA***************');
v = v.replace(/\b9781782978473\b/g, '9781782978473******JSTOR DDA***************');
v = v.replace(/\b9781785705953\b/g, '9781785705953******JSTOR DDA***************');
v = v.replace(/\b9780520966239\b/g, '9780520966239******JSTOR DDA***************');
v = v.replace(/\b9789048532629\b/g, '9789048532629******JSTOR DDA***************');
v = v.replace(/\b9781781886182\b/g, '9781781886182******JSTOR DDA***************');
v = v.replace(/\b9781781886144\b/g, '9781781886144******JSTOR DDA***************');
v = v.replace(/\b9780300224993\b/g, '9780300224993******JSTOR DDA***************');
v = v.replace(/\b9780231542968\b/g, '9780231542968******JSTOR DDA***************');
v = v.replace(/\b9780231542760\b/g, '9780231542760******JSTOR DDA***************');
v = v.replace(/\b9780700623259\b/g, '9780700623259******JSTOR DDA***************');
v = v.replace(/\b9781782049159\b/g, '9781782049159******JSTOR DDA***************');
v = v.replace(/\b9781783086245\b/g, '9781783086245******JSTOR DDA***************');
v = v.replace(/\b9780231542791\b/g, '9780231542791******JSTOR DDA***************');
v = v.replace(/\b9780520965881\b/g, '9780520965881******JSTOR DDA***************');
v = v.replace(/\b9780520966130\b/g, '9780520966130******JSTOR DDA***************');
v = v.replace(/\b9780300227918\b/g, '9780300227918******JSTOR DDA***************');
v = v.replace(/\b9780823274574\b/g, '9780823274574******JSTOR DDA***************');
v = v.replace(/\b9780231542333\b/g, '9780231542333******JSTOR DDA***************');
v = v.replace(/\b9781783086467\b/g, '9781783086467******JSTOR DDA***************');
v = v.replace(/\b9781911307730\b/g, '9781911307730******JSTOR DDA***************');
v = v.replace(/\b9780815731320\b/g, '9780815731320******JSTOR DDA***************');
v = v.replace(/\b9780231545280\b/g, '9780231545280******JSTOR DDA***************');
v = v.replace(/\b9780231542722\b/g, '9780231542722******JSTOR DDA***************');
v = v.replace(/\b9781785705793\b/g, '9781785705793******JSTOR DDA***************');
v = v.replace(/\b9781785703386\b/g, '9781785703386******JSTOR DDA***************');
v = v.replace(/\b9781783085187\b/g, '9781783085187******JSTOR DDA***************');
v = v.replace(/\b9789633861585\b/g, '9789633861585******JSTOR DDA***************');
v = v.replace(/\b9781786800008\b/g, '9781786800008******JSTOR DDA***************');
v = v.replace(/\b9780231542562\b/g, '9780231542562******JSTOR DDA***************');
v = v.replace(/\b9781783086153\b/g, '9781783086153******JSTOR DDA***************');
v = v.replace(/\b9780472122714\b/g, '9780472122714******JSTOR DDA***************');
v = v.replace(/\b9780815729709\b/g, '9780815729709******JSTOR DDA***************');
v = v.replace(/\b9780231542173\b/g, '9780231542173******JSTOR DDA***************');
v = v.replace(/\b9780520965034\b/g, '9780520965034******JSTOR DDA***************');
v = v.replace(/\b9780231544221\b/g, '9780231544221******JSTOR DDA***************');
v = v.replace(/\b9780231850841\b/g, '9780231850841******JSTOR DDA***************');
v = v.replace(/\b9781782049142\b/g, '9781782049142******JSTOR DDA***************');
v = v.replace(/\b9780231543330\b/g, '9780231543330******JSTOR DDA***************');
v = v.replace(/\b9781782049388\b/g, '9781782049388******JSTOR DDA***************');
v = v.replace(/\b9781786800251\b/g, '9781786800251******JSTOR DDA***************');
v = v.replace(/\b9780262339650\b/g, '9780262339650******JSTOR DDA***************');
v = v.replace(/\b9781782049395\b/g, '9781782049395******JSTOR DDA***************');
v = v.replace(/\b9781783086085\b/g, '9781783086085******JSTOR DDA***************');
v = v.replace(/\b9780520963597\b/g, '9780520963597******JSTOR DDA***************');
v = v.replace(/\b9781506420769\b/g, '9781506420769******JSTOR DDA***************');
v = v.replace(/\b9780231543682\b/g, '9780231543682******JSTOR DDA***************');
v = v.replace(/\b9781501708305\b/g, '9781501708305******JSTOR DDA***************');
v = v.replace(/\b9781501708343\b/g, '9781501708343******JSTOR DDA***************');
v = v.replace(/\b9781911307495\b/g, '9781911307495******JSTOR DDA***************');
v = v.replace(/\b9780231543118\b/g, '9780231543118******JSTOR DDA***************');
v = v.replace(/\b9780520964532\b/g, '9780520964532******JSTOR DDA***************');
v = v.replace(/\b9780823273119\b/g, '9780823273119******JSTOR DDA***************');
v = v.replace(/\b9780300227710\b/g, '9780300227710******JSTOR DDA***************');
v = v.replace(/\b9780231542517\b/g, '9780231542517******JSTOR DDA***************');
v = v.replace(/\b9780520967410\b/g, '9780520967410******JSTOR DDA***************');
v = v.replace(/\b9781501708206\b/g, '9781501708206******JSTOR DDA***************');
v = v.replace(/\b9780520966642\b/g, '9780520966642******JSTOR DDA***************');
v = v.replace(/\b9780520962538\b/g, '9780520962538******JSTOR DDA***************');
v = v.replace(/\b9781501707797\b/g, '9781501707797******JSTOR DDA***************');
v = v.replace(/\b9780815729136\b/g, '9780815729136******JSTOR DDA***************');
v = v.replace(/\b9781785703188\b/g, '9781785703188******JSTOR DDA***************');
v = v.replace(/\b9781785701986\b/g, '9781785701986******JSTOR DDA***************');
v = v.replace(/\b9780231541893\b/g, '9780231541893******JSTOR DDA***************');
v = v.replace(/\b9781782049135\b/g, '9781782049135******JSTOR DDA***************');
v = v.replace(/\b9780231542777\b/g, '9780231542777******JSTOR DDA***************');
v = v.replace(/\b9783959940078\b/g, '9783959940078******JSTOR DDA***************');
v = v.replace(/\b9781442622616\b/g, '9781442622616******JSTOR DDA***************');
v = v.replace(/\b9781785705755\b/g, '9781785705755******JSTOR DDA***************');
v = v.replace(/\b9780231543286\b/g, '9780231543286******JSTOR DDA***************');
v = v.replace(/\b9781782049128\b/g, '9781782049128******JSTOR DDA***************');
v = v.replace(/\b9780231543354\b/g, '9780231543354******JSTOR DDA***************');
v = v.replace(/\b9780231543071\b/g, '9780231543071******JSTOR DDA***************');
v = v.replace(/\b9780300224696\b/g, '9780300224696******JSTOR DDA***************');
v = v.replace(/\b9780231542913\b/g, '9780231542913******JSTOR DDA***************');
v = v.replace(/\b9780231543750\b/g, '9780231543750******JSTOR DDA***************');
v = v.replace(/\b9780231542975\b/g, '9780231542975******JSTOR DDA***************');
v = v.replace(/\b9781506410715\b/g, '9781506410715******JSTOR DDA***************');
v = v.replace(/\b9780773549104\b/g, '9780773549104******JSTOR DDA***************');
v = v.replace(/\b9781452953458\b/g, '9781452953458******JSTOR DDA***************');
v = v.replace(/\b9780520965867\b/g, '9780520965867******JSTOR DDA***************');
v = v.replace(/\b9780700623815\b/g, '9780700623815******JSTOR DDA***************');
v = v.replace(/\b9780520966161\b/g, '9780520966161******JSTOR DDA***************');
v = v.replace(/\b9781782049340\b/g, '9781782049340******JSTOR DDA***************');
v = v.replace(/\b9781783717644\b/g, '9781783717644******JSTOR DDA***************');
v = v.replace(/\b9781786800237\b/g, '9781786800237******JSTOR DDA***************');
v = v.replace(/\b9780822982494\b/g, '9780822982494******JSTOR DDA***************');
v = v.replace(/\b9780520967243\b/g, '9780520967243******JSTOR DDA***************');
v = v.replace(/\b9781785703805\b/g, '9781785703805******JSTOR DDA***************');
v = v.replace(/\b9780231543538\b/g, '9780231543538******JSTOR DDA***************');
v = v.replace(/\b9780300184228\b/g, '9780300184228******JSTOR DDA***************');
v = v.replace(/\b9780520966505\b/g, '9780520966505******JSTOR DDA***************');
v = v.replace(/\b9781452953403\b/g, '9781452953403******JSTOR DDA***************');
v = v.replace(/\b9780231542357\b/g, '9780231542357******JSTOR DDA***************');
v = v.replace(/\b9780823272938\b/g, '9780823272938******JSTOR DDA***************');
v = v.replace(/\b9780231543767\b/g, '9780231543767******JSTOR DDA***************');
v = v.replace(/\b9780520961180\b/g, '9780520961180******JSTOR DDA***************');
v = v.replace(/\b9781785704802\b/g, '9781785704802******JSTOR DDA***************');
v = v.replace(/\b9780520966147\b/g, '9780520966147******JSTOR DDA***************');
v = v.replace(/\b9780231542852\b/g, '9780231542852******JSTOR DDA***************');
v = v.replace(/\b9780231544009\b/g, '9780231544009******JSTOR DDA***************');
v = v.replace(/\b9781783086429\b/g, '9781783086429******JSTOR DDA***************');
v = v.replace(/\b9780252099304\b/g, '9780252099304******JSTOR DDA***************');
v = v.replace(/\b9780520965003\b/g, '9780520965003******JSTOR DDA***************');
v = v.replace(/\b9780262340045\b/g, '9780262340045******JSTOR DDA***************');
v = v.replace(/\b9781783085026\b/g, '9781783085026******JSTOR DDA***************');
v = v.replace(/\b9780520959910\b/g, '9780520959910******JSTOR DDA***************');
v = v.replace(/\b9780231543316\b/g, '9780231543316******JSTOR DDA***************');
v = v.replace(/\b9780813169361\b/g, '9780813169361******JSTOR DDA***************');
v = v.replace(/\b9780472122707\b/g, '9780472122707******JSTOR DDA***************');
v = v.replace(/\b9780300227550\b/g, '9780300227550******JSTOR DDA***************');
v = v.replace(/\b9783959940139\b/g, '9783959940139******JSTOR DDA***************');
v = v.replace(/\b9781911188070\b/g, '9781911188070******JSTOR DDA***************');
v = v.replace(/\b9780520966079\b/g, '9780520966079******JSTOR DDA***************');
v = v.replace(/\b9780520967298\b/g, '9780520967298******JSTOR DDA***************');
v = v.replace(/\b9789048527021\b/g, '9789048527021******JSTOR DDA***************');
v = v.replace(/\b9780231543255\b/g, '9780231543255******JSTOR DDA***************');
v = v.replace(/\b9780520966543\b/g, '9780520966543******JSTOR DDA***************');
v = v.replace(/\b9780231542821\b/g, '9780231542821******JSTOR DDA***************');
v = v.replace(/\b9781782049357\b/g, '9781782049357******JSTOR DDA***************');
v = v.replace(/\b9780813169842\b/g, '9780813169842******JSTOR DDA***************');
v = v.replace(/\b9780231542951\b/g, '9780231542951******JSTOR DDA***************');
v = v.replace(/\b9780520963566\b/g, '9780520963566******JSTOR DDA***************');
v = v.replace(/\b9780231543675\b/g, '9780231543675******JSTOR DDA***************');
v = v.replace(/\b9783959940115\b/g, '9783959940115******JSTOR DDA***************');
v = v.replace(/\b9780520958906\b/g, '9780520958906******JSTOR DDA***************');
v = v.replace(/\b9780520960107\b/g, '9780520960107******JSTOR DDA***************');
v = v.replace(/\b9780300224849\b/g, '9780300224849******JSTOR DDA***************');
v = v.replace(/\b9780520967366\b/g, '9780520967366******JSTOR DDA***************');
v = v.replace(/\b9781501707988\b/g, '9781501707988******JSTOR DDA***************');
v = v.replace(/\b9780815730378\b/g, '9780815730378******JSTOR DDA***************');
v = v.replace(/\b9781506420561\b/g, '9781506420561******JSTOR DDA***************');
v = v.replace(/\b9780231542685\b/g, '9780231542685******JSTOR DDA***************');
v = v.replace(/\b9780231542593\b/g, '9780231542593******JSTOR DDA***************');
v = v.replace(/\b9781609175061\b/g, '9781609175061******JSTOR DDA***************');
v = v.replace(/\b9781501707773\b/g, '9781501707773******JSTOR DDA***************');
v = v.replace(/\b9780520965515\b/g, '9780520965515******JSTOR DDA***************');
v = v.replace(/\b9780262339452\b/g, '9780262339452******JSTOR DDA***************');
v = v.replace(/\b9780520961982\b/g, '9780520961982******JSTOR DDA***************');
v = v.replace(/\b9781609175054\b/g, '9781609175054******JSTOR DDA***************');
v = v.replace(/\b9781607325727\b/g, '9781607325727******JSTOR DDA***************');
v = v.replace(/\b9789633861080\b/g, '9789633861080******JSTOR DDA***************');
v = v.replace(/\b9780823273232\b/g, '9780823273232******JSTOR DDA***************');
v = v.replace(/\b9780520961357\b/g, '9780520961357******JSTOR DDA***************');
v = v.replace(/\b9781785703881\b/g, '9781785703881******JSTOR DDA***************');
v = v.replace(/\b9781782049265\b/g, '9781782049265******JSTOR DDA***************');
v = v.replace(/\b9780231542326\b/g, '9780231542326******JSTOR DDA***************');
v = v.replace(/\b9780520961210\b/g, '9780520961210******JSTOR DDA***************');
v = v.replace(/\b9780773549821\b/g, '9780773549821******JSTOR DDA***************');
v = v.replace(/\b9780520960893\b/g, '9780520960893******JSTOR DDA***************');
v = v.replace(/\b9789633861295\b/g, '9789633861295******JSTOR DDA***************');
v = v.replace(/\b9781785703140\b/g, '9781785703140******JSTOR DDA***************');
v = v.replace(/\b9780231542753\b/g, '9780231542753******JSTOR DDA***************');
v = v.replace(/\b9780520965645\b/g, '9780520965645******JSTOR DDA***************');
v = v.replace(/\b9780520966031\b/g, '9780520966031******JSTOR DDA***************');
v = v.replace(/\b9780231542869\b/g, '9780231542869******JSTOR DDA***************');
v = v.replace(/\b9781782049166\b/g, '9781782049166******JSTOR DDA***************');
v = v.replace(/\b9781452953465\b/g, '9781452953465******JSTOR DDA***************');
v = v.replace(/\b9781782046301\b/g, '9781782046301******JSTOR DDA***************');
v = v.replace(/\b9781782049333\b/g, '9781782049333******JSTOR DDA***************');
v = v.replace(/\b9781782049234\b/g, '9781782049234******JSTOR DDA***************');
v = v.replace(/\b9780520965638\b/g, '9780520965638******JSTOR DDA***************');
v = v.replace(/\b9789048532063\b/g, '9789048532063******JSTOR DDA***************');
v = v.replace(/\b9781786800114\b/g, '9781786800114******JSTOR DDA***************');
v = v.replace(/\b9781501707889\b/g, '9781501707889******JSTOR DDA***************');
v = v.replace(/\b9780773548312\b/g, '9780773548312******JSTOR DDA***************');
v = v.replace(/\b9780700624010\b/g, '9780700624010******JSTOR DDA***************');
v = v.replace(/\b9780262337250\b/g, '9780262337250******JSTOR DDA***************');
v = v.replace(/\b9780231543248\b/g, '9780231543248******JSTOR DDA***************');
v = v.replace(/\b9780520967434\b/g, '9780520967434******JSTOR DDA***************');
v = v.replace(/\b9781782049173\b/g, '9781782049173******JSTOR DDA***************');
v = v.replace(/\b9780231542746\b/g, '9780231542746******JSTOR DDA***************');
v = v.replace(/\b9780231542883\b/g, '9780231542883******JSTOR DDA***************');
v = v.replace(/\b9780231542876\b/g, '9780231542876******JSTOR DDA***************');
v = v.replace(/\b9780700623877\b/g, '9780700623877******JSTOR DDA***************');
v = v.replace(/\b9780674973299\b/g, '9780674973299******JSTOR DDA***************');
v = v.replace(/\b9780300229035\b/g, '9780300229035******JSTOR DDA***************');
v = v.replace(/\b9781782049418\b/g, '9781782049418******JSTOR DDA***************');
v = v.replace(/\b9781607325741\b/g, '9781607325741******JSTOR DDA***************');
v = v.replace(/\b9781782049050\b/g, '9781782049050******JSTOR DDA***************');
v = v.replace(/\b9780252098901\b/g, '9780252098901******JSTOR DDA***************');
v = v.replace(/\b9780773599963\b/g, '9780773599963******JSTOR DDA***************');
v = v.replace(/\b9780231543323\b/g, '9780231543323******JSTOR DDA***************');
v = v.replace(/\b9781786800725\b/g, '9781786800725******JSTOR DDA***************');
v = v.replace(/\b9780820350455\b/g, '9780820350455******JSTOR DDA***************');
v = v.replace(/\b9780520966727\b/g, '9780520966727******JSTOR DDA***************');
v = v.replace(/\b9781785704420\b/g, '9781785704420******JSTOR DDA***************');
v = v.replace(/\b9780520966420\b/g, '9780520966420******JSTOR DDA***************');
v = v.replace(/\b9780520960626\b/g, '9780520960626******JSTOR DDA***************');
v = v.replace(/\b9781506423319\b/g, '9781506423319******JSTOR DDA***************');
v = v.replace(/\b9781786800190\b/g, '9781786800190******JSTOR DDA***************');
v = v.replace(/\b9780231543262\b/g, '9780231543262******JSTOR DDA***************');
v = v.replace(/\b9780773550650\b/g, '9780773550650******JSTOR DDA***************');
v = v.replace(/\b9781782049432\b/g, '9781782049432******JSTOR DDA***************');
v = v.replace(/\b9780231542708\b/g, '9780231542708******JSTOR DDA***************');
v = v.replace(/\b9780812293050\b/g, '9780812293050******JSTOR DDA***************');
v = v.replace(/\b9780520966055\b/g, '9780520966055******JSTOR DDA***************');
v = v.replace(/\b9780813570570\b/g, '9780813570570******JSTOR DDA***************');
v = v.replace(/\b9781782049449\b/g, '9781782049449******JSTOR DDA***************');
v = v.replace(/\b9781783086658\b/g, '9781783086658******JSTOR DDA***************');
v = v.replace(/\b9780674973084\b/g, '9780674973084******JSTOR DDA***************');
v = v.replace(/\b9781400884452\b/g, '9781400884452******JSTOR DDA***************');
v = v.replace(/\b9781782049241\b/g, '9781782049241******JSTOR DDA***************');
v = v.replace(/\b9780520293144\b/g, '9780520293144******JSTOR DDA***************');
v = v.replace(/\b9781783719938\b/g, '9781783719938******JSTOR DDA***************');
v = v.replace(/\b9780231543170\b/g, '9780231543170******JSTOR DDA***************');
v = v.replace(/\b9780231542920\b/g, '9780231542920******JSTOR DDA***************');
v = v.replace(/\b9781782049456\b/g, '9781782049456******JSTOR DDA***************');
v = v.replace(/\b9781783086375\b/g, '9781783086375******JSTOR DDA***************');
v = v.replace(/\b9780813939773\b/g, '9780813939773******JSTOR DDA***************');
v = v.replace(/\b9780884140771\b/g, '9780884140771******JSTOR DDA***************');
v = v.replace(/\b9780520967151\b/g, '9780520967151******JSTOR DDA***************');
v = v.replace(/\b9780231543781\b/g, '9780231543781******JSTOR DDA***************');
v = v.replace(/\b9780231851008\b/g, '9780231851008******JSTOR DDA***************');
v = v.replace(/\b9780231542678\b/g, '9780231542678******JSTOR DDA***************');
v = v.replace(/\b9780813574738\b/g, '9780813574738******JSTOR DDA***************');
v = v.replace(/\b9780231543668\b/g, '9780231543668******JSTOR DDA***************');
v = v.replace(/\b9781786800503\b/g, '9781786800503******JSTOR DDA***************');
v = v.replace(/\b9781607325963\b/g, '9781607325963******JSTOR DDA***************');
v = v.replace(/\b9780472122561\b/g, '9780472122561******JSTOR DDA***************');
v = v.replace(/\b9781785706073\b/g, '9781785706073******JSTOR DDA***************');
v = v.replace(/\b9780773549005\b/g, '9780773549005******JSTOR DDA***************');
v = v.replace(/\b9781487511722\b/g, '9781487511722******JSTOR DDA***************');
v = v.replace(/\b9780773549142\b/g, '9780773549142******JSTOR DDA***************');
v = v.replace(/\b9780823274758\b/g, '9780823274758******JSTOR DDA***************');
v = v.replace(/\b9783959940030\b/g, '9783959940030******JSTOR DDA***************');
v = v.replace(/\b9780300227628\b/g, '9780300227628******JSTOR DDA***************');
v = v.replace(/\b9780520967144\b/g, '9780520967144******JSTOR DDA***************');
v = v.replace(/\b9780300224832\b/g, '9780300224832******JSTOR DDA***************');
v = v.replace(/\b9780520959798\b/g, '9780520959798******JSTOR DDA***************');
v = v.replace(/\b9781785702228\b/g, '9781785702228******JSTOR DDA***************');
v = v.replace(/\b9781782049326\b/g, '9781782049326******JSTOR DDA***************');
v = v.replace(/\b9780823275236\b/g, '9780823275236******JSTOR DDA***************');
v = v.replace(/\b9780520966444\b/g, '9780520966444******JSTOR DDA***************');
v = v.replace(/\b9780300225143\b/g, '9780300225143******JSTOR DDA***************');
v = v.replace(/\b9780231543187\b/g, '9780231543187******JSTOR DDA***************');
v = v.replace(/\b9780231541619\b/g, '9780231541619******JSTOR DDA***************');
v = v.replace(/\b9780773548954\b/g, '9780773548954******JSTOR DDA***************');
v = v.replace(/\b9780520962118\b/g, '9780520962118******JSTOR DDA***************');
v = v.replace(/\b9780520965669\b/g, '9780520965669******JSTOR DDA***************');
v = v.replace(/\b9781487511456\b/g, '9781487511456******JSTOR DDA***************');
v = v.replace(/\b9780262338219\b/g, '9780262338219******JSTOR DDA***************');
v = v.replace(/\b9780231543279\b/g, '9780231543279******JSTOR DDA***************');
v = v.replace(/\b9780231543446\b/g, '9780231543446******JSTOR DDA***************');
v = v.replace(/\b9780231542500\b/g, '9780231542500******JSTOR DDA***************');
v = v.replace(/\b9780700624034\b/g, '9780700624034******JSTOR DDA***************');
v = v.replace(/\b9781607325505\b/g, '9781607325505******JSTOR DDA***************');
v = v.replace(/\b9780823273058\b/g, '9780823273058******JSTOR DDA***************');
v = v.replace(/\b9780231542890\b/g, '9780231542890******JSTOR DDA***************');
v = v.replace(/\b9781785704383\b/g, '9781785704383******JSTOR DDA***************');
v = v.replace(/\b9786155513619\b/g, '9786155513619******JSTOR DDA***************');
v = v.replace(/\b9780520965577\b/g, '9780520965577******JSTOR DDA***************');
v = v.replace(/\b9780252099328\b/g, '9780252099328******JSTOR DDA***************');
v = v.replace(/\b9780231543156\b/g, '9780231543156******JSTOR DDA***************');
v = v.replace(/\b9780520960640\b/g, '9780520960640******JSTOR DDA***************');
v = v.replace(/\b9780472122554\b/g, '9780472122554******JSTOR DDA***************');
v = v.replace(/\b9781911188186\b/g, '9781911188186******JSTOR DDA***************');
v = v.replace(/\b9780520964358\b/g, '9780520964358******JSTOR DDA***************');
v = v.replace(/\b9780813169071\b/g, '9780813169071******JSTOR DDA***************');
v = v.replace(/\b9780520966680\b/g, '9780520966680******JSTOR DDA***************');
v = v.replace(/\b9781786800077\b/g, '9781786800077******JSTOR DDA***************');
v = v.replace(/\b9780262339988\b/g, '9780262339988******JSTOR DDA***************');
v = v.replace(/\b9781782049579\b/g, '9781782049579******JSTOR DDA***************');
v = v.replace(/\b9780520966697\b/g, '9780520966697******JSTOR DDA***************');
v = v.replace(/\b9781911307402\b/g, '9781911307402******JSTOR DDA***************');
v = v.replace(/\b9781783086610\b/g, '9781783086610******JSTOR DDA***************');
v = v.replace(/\b9780822982470\b/g, '9780822982470******JSTOR DDA***************');
v = v.replace(/\b9780520965973\b/g, '9780520965973******JSTOR DDA***************');
v = v.replace(/\b9781783084913\b/g, '9781783084913******JSTOR DDA***************');
v = v.replace(/\b9780815727873\b/g, '9780815727873******JSTOR DDA***************');
v = v.replace(/\b9781783085675\b/g, '9781783085675******JSTOR DDA***************');
v = v.replace(/\b9781911307563\b/g, '9781911307563******JSTOR DDA***************');
v = v.replace(/\b9781785704437\b/g, '9781785704437******JSTOR DDA***************');
v = v.replace(/\b9780231543828\b/g, '9780231543828******JSTOR DDA***************');
v = v.replace(/\b9780822981930\b/g, '9780822981930******JSTOR DDA***************');
v = v.replace(/\b9780520964105\b/g, '9780520964105******JSTOR DDA***************');
v = v.replace(/\b9780813584966\b/g, '9780813584966******JSTOR DDA***************');
v = v.replace(/\b9781785705878\b/g, '9781785705878******JSTOR DDA***************');
v = v.replace(/\b9780823272877\b/g, '9780823272877******JSTOR DDA***************');
v = v.replace(/\b9781786800145\b/g, '9781786800145******JSTOR DDA***************');
v = v.replace(/\b9780823275656\b/g, '9780823275656******JSTOR DDA***************');
v = v.replace(/\b9781452954608\b/g, '9781452954608******JSTOR DDA***************');
v = v.replace(/\b9780252099441\b/g, '9780252099441******JSTOR DDA***************');
v = v.replace(/\b9780252040474\b/g, '9780252040474****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780252040801\b/g, '9780252040801****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780252040825\b/g, '9780252040825****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780252040924\b/g, '9780252040924****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780262035606\b/g, '9780262035606****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780262035743\b/g, '9780262035743****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780262036078\b/g, '9780262036078****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780262036160\b/g, '9780262036160****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780262036184\b/g, '9780262036184****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780262533393\b/g, '9780262533393****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300137156\b/g, '9780300137156****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300182682\b/g, '9780300182682****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300197112\b/g, '9780300197112****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300198072\b/g, '9780300198072****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300198652\b/g, '9780300198652****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300213980\b/g, '9780300213980****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300215922\b/g, '9780300215922****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300220384\b/g, '9780300220384****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300220407\b/g, '9780300220407****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300221367\b/g, '9780300221367****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300221541\b/g, '9780300221541****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780300222838\b/g, '9780300222838****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780472073344\b/g, '9780472073344****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780472130245\b/g, '9780472130245****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780472130306\b/g, '9780472130306****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780472130313\b/g, '9780472130313****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780674545731\b/g, '9780674545731****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780674971394\b/g, '9780674971394****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745330570\b/g, '9780745330570****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745335698\b/g, '9780745335698****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745335858\b/g, '9780745335858****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745336046\b/g, '9780745336046****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745336190\b/g, '9780745336190****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745336435\b/g, '9780745336435****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745399027\b/g, '9780745399027****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745399041\b/g, '9780745399041****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745399089\b/g, '9780745399089****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745399317\b/g, '9780745399317****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780745399393\b/g, '9780745399393****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780800699482\b/g, '9780800699482****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780813570556\b/g, '9780813570556****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780813574714\b/g, '9780813574714****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780813584942\b/g, '9780813584942****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780815727842\b/g, '9780815727842****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780815728429\b/g, '9780815728429****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780815729129\b/g, '9780815729129****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780815729693\b/g, '9780815729693****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780815730361\b/g, '9780815730361****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780815731313\b/g, '9780815731313****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780816694433\b/g, '9780816694433****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780822964254\b/g, '9780822964254****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780822964520\b/g, '9780822964520****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780822964544\b/g, '9780822964544****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780823272839\b/g, '9780823272839****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780823272891\b/g, '9780823272891****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780823273010\b/g, '9780823273010****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780823273072\b/g, '9780823273072****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780823273195\b/g, '9780823273195****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780823274543\b/g, '9780823274543****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9780823274727\b/g, '9780823274727****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781442650237\b/g, '9781442650237****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781487500610\b/g, '9781487500610****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781487500740\b/g, '9781487500740****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781506410708\b/g, '9781506410708****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781506420554\b/g, '9781506420554****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781506420752\b/g, '9781506420752****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781506423432\b/g, '9781506423432****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781517900519\b/g, '9781517900519****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781517900618\b/g, '9781517900618****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781517900656\b/g, '9781517900656****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781517902407\b/g, '9781517902407****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781571135872\b/g, '9781571135872****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781571139429\b/g, '9781571139429****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781571139634\b/g, '9781571139634****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781571139665\b/g, '9781571139665****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781571139733\b/g, '9781571139733****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781589831278\b/g, '9781589831278****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781607325499\b/g, '9781607325499****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781607325710\b/g, '9781607325710****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781607325734\b/g, '9781607325734****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781607325956\b/g, '9781607325956****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781611862201\b/g, '9781611862201****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781611862218\b/g, '9781611862218****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781781886069\b/g, '9781781886069****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781781886137\b/g, '9781781886137****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781782978442\b/g, '9781782978442****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783081851\b/g, '9781783081851****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783084906\b/g, '9781783084906****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783085002\b/g, '9781783085002****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783085163\b/g, '9781783085163****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783085668\b/g, '9781783085668****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783086078\b/g, '9781783086078****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783086139\b/g, '9781783086139****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783086238\b/g, '9781783086238****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783086368\b/g, '9781783086368****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783086405\b/g, '9781783086405****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783086443\b/g, '9781783086443****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783086603\b/g, '9781783086603****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783086634\b/g, '9781783086634****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271450\b/g, '9781783271450****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271634\b/g, '9781783271634****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271658\b/g, '9781783271658****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271689\b/g, '9781783271689****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271719\b/g, '9781783271719****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271733\b/g, '9781783271733****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271740\b/g, '9781783271740****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271788\b/g, '9781783271788****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271801\b/g, '9781783271801****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271849\b/g, '9781783271849****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781783271870\b/g, '9781783271870****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785701955\b/g, '9781785701955****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785702198\b/g, '9781785702198****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785702952\b/g, '9781785702952****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785702990\b/g, '9781785702990****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785703119\b/g, '9781785703119****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785703157\b/g, '9781785703157****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785703195\b/g, '9781785703195****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785703270\b/g, '9781785703270****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785703355\b/g, '9781785703355****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785703775\b/g, '9781785703775****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785703850\b/g, '9781785703850****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785704116\b/g, '9781785704116****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785704352\b/g, '9781785704352****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785704390\b/g, '9781785704390****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785704772\b/g, '9781785704772****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785704819\b/g, '9781785704819****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785704857\b/g, '9781785704857****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785704895\b/g, '9781785704895****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785705267\b/g, '9781785705267****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785705762\b/g, '9781785705762****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785705847\b/g, '9781785705847****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785705922\b/g, '9781785705922****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781785706042\b/g, '9781785706042****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781843844358\b/g, '9781843844358****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781843844518\b/g, '9781843844518****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781843844532\b/g, '9781843844532****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781843844563\b/g, '9781843844563****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781843844570\b/g, '9781843844570****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781903153673\b/g, '9781903153673****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781903153710\b/g, '9781903153710****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781911188049\b/g, '9781911188049****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781911188155\b/g, '9781911188155****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781911307365\b/g, '9781911307365****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781911307426\b/g, '9781911307426****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781911307440\b/g, '9781911307440****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781911307501\b/g, '9781911307501****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9781911307747\b/g, '9781911307747****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9783959940009\b/g, '9783959940009****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9783959940023\b/g, '9783959940023****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9783959940061\b/g, '9783959940061****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9783959940108\b/g, '9783959940108****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9783959940122\b/g, '9783959940122****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9786155513626\b/g, '9786155513626****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9789089648488\b/g, '9789089648488****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9789462982147\b/g, '9789462982147****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9789462982581\b/g, '9789462982581****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9789633861059\b/g, '9789633861059****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9789633861271\b/g, '9789633861271****Alt Ed - eBook in JSTOR DDA**********');
v = v.replace(/\b9789633861578\b/g, '9789633861578****Alt Ed - eBook in JSTOR DDA**********');


    return v;
}

// The callback used for the document body and title observers
function observerCallback(mutations) {
    var i;

    mutations.forEach(function(mutation) {
        for (i = 0; i < mutation.addedNodes.length; i++) {
            if (mutation.addedNodes[i].nodeType === 3) {
                // Replace the text for text nodes
                handleText(mutation.addedNodes[i]);
            } else {
                // Otherwise, find text nodes within the given node and replace text
                walk(mutation.addedNodes[i]);
            }
        }
    });
}

// Walk the doc (document) body, replace the title, and observe the body and title
function walkAndObserve(doc) {
    var docTitle = doc.getElementsByTagName('title')[0],
    observerConfig = {
        characterData: true,
        childList: true,
        subtree: true
    },
    bodyObserver, titleObserver;

    // Do the initial text replacements in the document body and title
    walk(doc.body);
    doc.title = replaceText(doc.title);

    // Observe the body so that we replace text in any added/modified nodes
    bodyObserver = new MutationObserver(observerCallback);
    bodyObserver.observe(doc.body, observerConfig);

    // Observe the title so we can handle any modifications there
    if (docTitle) {
        titleObserver = new MutationObserver(observerCallback);
        titleObserver.observe(docTitle, observerConfig);
    }
}
walkAndObserve(document);
