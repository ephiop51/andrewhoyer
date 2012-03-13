(function(exports){

    var coordinates = {
        'zoetrope': [[15,241],[15,313],[78,370],[176,398],[283,403],[374,387],[439,358],[477,321],[485,295],[484,179],[426,142],[293,124],[212,125],[115,133],[45,150],[13,173],[15,241],[75,277],[188,300],[276,304],[354,302],[438,279],[483,239],[483,182],[398,212],[295,224],[169,223],[67,209],[37,198],[15,175],[15,242],[33,255],[30,198],[22,198],[20,237],[35,254],[76,276],[60,219],[56,264],[74,272],[115,284],[146,291],[145,233],[118,226],[116,283],[202,297],[234,299],[234,239],[203,236],[204,297],[299,297],[325,297],[325,237],[299,235],[299,295],[384,285],[407,279],[407,224],[386,227],[384,285],[442,268],[460,261],[457,208],[441,214],[442,269],[479,238],[454,199],[395,176],[309,164],[213,163],[137,170],[56,196],[49,200],[117,215],[216,200],[289,199],[366,212],[393,216],[460,198],[460,164],[446,157],[432,151],[430,184],[446,187],[446,160],[431,152],[429,186],[402,173],[405,147],[415,147],[413,177],[364,167],[366,139],[378,142],[378,167],[326,159],[327,134],[345,137],[344,163],[293,158],[293,133],[305,134],[305,157],[252,156],[252,133],[265,133],[265,158],[213,158],[212,132],[226,132],[226,156],[174,161],[174,135],[192,132],[192,159],[136,165],[135,138],[149,135],[152,161],[98,174],[98,146],[113,141],[113,169],[67,181],[66,152],[80,150],[80,179],[39,195],[39,163],[48,158],[50,189],[33,200],[15,199],[17,245],[14,316],[75,372],[178,399],[226,402],[227,492],[237,496],[251,496],[270,491],[270,471],[268,403],[223,402],[307,401],[386,381],[445,351],[480,313],[488,279],[482,236],[485,176],[376,217],[286,226],[166,224],[52,203],[15,172],[54,143],[141,127],[232,122],[336,127],[422,143],[445,151]],
        'css-clock': [[130,371],[133,372],[204,299],[193,285],[189,274],[198,257],[175,141],[194,136],[197,135],[203,134],[221,252],[218,255],[218,256],[198,256],[177,140],[194,136],[218,257],[215,262],[223,256],[232,279],[221,279],[234,279],[223,295],[214,298],[201,296],[129,370],[123,362],[191,283],[202,295],[214,296],[222,279],[214,262],[197,258],[184,274],[73,263],[66,248],[55,248],[81,334],[131,412],[204,461],[297,477],[389,440],[408,458],[477,337],[458,165],[343,36],[203,7],[357,31],[344,35],[355,29],[466,161],[458,165],[466,161],[481,330],[478,338],[408,457],[302,495],[202,473],[125,415],[70,338],[43,246],[48,148],[102,58],[203,7],[342,35],[457,165],[476,338],[408,455],[389,439],[395,423],[297,466],[213,449],[141,399],[92,330],[66,248],[75,156],[121,80],[111,77],[202,33],[212,36],[121,78],[109,78],[62,156],[53,247],[79,333],[130,410],[203,459],[293,477],[387,439],[447,328],[427,178],[327,62],[201,33],[110,76]],
        'type-rain': [[8,215],[8,215],[36,189],[36,189],[76,151],[76,151],[95,152],[95,152],[128,117],[128,117],[159,117],[159,117],[198,91],[198,91],[246,94],[246,94],[301,97],[301,97],[332,94],[332,94],[360,118],[360,118],[407,133],[407,133],[422,161],[422,161],[461,172],[461,172],[489,193],[489,193],[497,237],[497,237],[475,272],[475,272],[438,300],[438,300],[402,292],[402,292],[371,422],[371,422],[402,294],[402,294],[339,275],[339,275],[318,331],[318,331],[334,277],[334,277],[295,264],[295,264],[236,287],[236,287],[206,367],[206,367],[238,289],[238,289],[174,284],[174,284],[161,310],[161,310],[174,280],[174,280],[121,267],[121,267],[76,396],[76,396],[120,267],[120,267],[52,298],[52,298],[11,272],[11,272],[8,214],[8,214],[57,251],[57,251],[92,198],[92,198],[122,140],[122,140],[167,249],[167,249],[143,193],[143,193],[93,198],[93,198],[180,187],[180,187],[179,124],[179,124],[232,120],[232,120],[244,154],[244,154],[219,184],[219,184],[180,186],[180,186],[183,251],[183,251],[262,247],[262,247],[280,213],[280,213],[217,183],[217,183],[279,211],[279,211],[328,131],[328,131],[370,135],[370,135],[395,159],[395,159],[367,134],[367,134],[325,130],[325,130],[298,184],[298,184],[310,244],[310,244],[357,259],[357,259],[394,232],[394,232],[449,293],[449,293]],
        'mobeh': [[68,497],[75,359],[84,239],[84,156],[92,91],[107,63],[127,72],[132,76],[125,79],[131,90],[128,90],[135,106],[125,113],[137,125],[125,131],[135,144],[128,149],[129,161],[136,167],[126,179],[141,187],[130,195],[130,210],[139,214],[126,223],[139,231],[128,239],[140,253],[126,264],[146,278],[132,293],[145,302],[135,308],[146,342],[147,292],[173,213],[189,158],[209,79],[221,65],[230,88],[221,136],[209,193],[192,254],[180,293],[233,338],[241,358],[239,370],[235,389],[224,396],[222,376],[224,356],[231,342],[229,389],[237,347],[230,340],[181,291],[147,342],[133,304],[122,72],[133,308],[148,344],[183,287],[230,90],[219,62],[253,27],[290,22],[347,33],[397,65],[426,106],[438,162],[427,248],[425,341],[429,435],[434,497]],
        'walking-with-css': [[5,433],[174,434],[162,474],[135,498],[165,472],[222,493],[210,498],[225,493],[246,426],[292,482],[291,498],[293,484],[347,449],[341,457],[340,498],[347,450],[280,340],[269,361],[210,364],[186,348],[209,388],[249,425],[186,348],[171,436],[197,289],[229,223],[256,179],[227,228],[190,213],[164,273],[147,360],[130,395],[153,412],[172,394],[171,361],[194,289],[226,226],[191,212],[198,170],[208,146],[13,142],[15,127],[44,123],[42,100],[61,73],[89,77],[102,60],[128,72],[143,64],[161,93],[180,94],[184,124],[192,142],[25,136],[22,141],[190,141],[209,147],[242,112],[226,86],[220,44],[255,19],[300,33],[304,58],[304,68],[304,59],[302,69],[311,80],[300,83],[303,103],[282,110],[271,134],[241,118],[272,134],[286,218],[293,253],[363,299],[398,324],[391,344],[371,346],[337,318],[284,288],[285,223],[282,339],[341,433],[391,436],[391,415],[473,415],[473,474],[433,470],[433,497],[417,497],[416,468],[388,468],[391,435],[392,419],[472,417],[474,437]],
        'sudoku-solver': [[15,485],[488,486],[485,12],[13,10],[14,484],[64,484],[66,11],[120,10],[117,486],[172,487],[172,8],[170,487],[226,485],[225,13],[277,13],[277,487],[330,486],[330,15],[329,485],[384,487],[385,14],[436,14],[433,484],[489,486],[485,437],[200,436],[200,418],[206,410],[194,407],[196,396],[207,401],[196,396],[191,408],[201,419],[201,437],[94,433],[97,417],[86,417],[99,405],[89,393],[84,403],[92,395],[96,402],[85,417],[90,433],[12,434],[14,383],[356,380],[354,363],[364,362],[360,354],[352,354],[353,342],[364,342],[349,343],[354,351],[363,356],[365,363],[357,365],[357,380],[487,384],[484,329],[250,332],[248,307],[254,298],[246,300],[249,290],[258,291],[245,298],[257,298],[249,310],[249,329],[17,326],[492,327],[488,276],[461,276],[461,259],[467,248],[460,238],[454,245],[468,248],[463,258],[454,256],[462,261],[461,274],[92,275],[89,256],[94,260],[97,251],[91,249],[98,240],[87,239],[100,241],[94,247],[98,250],[95,262],[93,276],[14,277],[14,224],[487,226],[487,172],[357,170],[352,150],[362,151],[353,149],[365,137],[356,129],[351,136],[358,131],[365,138],[353,151],[356,173],[141,168],[138,147],[145,151],[149,142],[139,141],[141,131],[152,132],[141,132],[139,142],[150,143],[147,152],[139,150],[142,171],[15,170],[487,174],[486,116],[14,118],[15,66],[89,66],[88,51],[97,31],[88,29],[96,31],[87,51],[89,64],[488,65]],
        'simple-fractals': [[243,349],[242,478],[366,477],[365,351],[244,346],[327,308],[367,348],[412,308],[370,266],[323,306],[284,224],[198,263],[243,344],[200,266],[143,222],[182,168],[241,207],[256,167],[300,181],[282,223],[239,212],[200,263],[137,221],[87,215],[95,163],[151,171],[147,137],[180,136],[181,166],[151,173],[140,223],[89,215],[51,224],[31,245],[9,225],[31,204],[16,198],[25,181],[41,188],[34,205],[51,225],[42,190],[76,174],[89,211],[97,162],[74,173],[66,157],[86,142],[99,160],[153,172],[145,136],[133,117],[153,104],[166,121],[149,138],[170,121],[179,113],[187,122],[177,134],[187,168],[241,209],[254,168],[250,133],[235,112],[258,97],[268,117],[279,104],[292,116],[283,125],[270,118],[251,132],[284,131],[287,159],[309,150],[318,171],[298,180],[287,160],[299,179],[285,229],[328,305],[373,264],[385,220],[378,187],[364,165],[386,154],[399,174],[409,163],[418,172],[410,183],[398,173],[380,188],[413,185],[417,217],[437,208],[444,225],[425,236],[417,219],[383,221],[424,237],[413,278],[439,277],[460,270],[469,290],[447,295],[440,279],[451,296],[437,312],[411,307],[413,273],[374,265]],
        'something-a-day': [[69,281],[59,244],[70,284],[58,231],[22,203],[34,157],[60,155],[38,153],[62,151],[73,79],[124,89],[73,84],[133,90],[167,59],[209,77],[220,54],[217,51],[246,56],[268,27],[341,33],[347,55],[415,55],[426,76],[416,54],[432,107],[480,119],[470,175],[437,180],[436,252],[439,188],[435,259],[376,266],[362,304],[375,268],[362,307],[281,301],[198,314],[182,282],[128,295],[110,258],[68,284],[55,317],[83,336],[110,320],[120,347],[146,329],[173,350],[189,338],[214,339],[228,323],[205,317],[228,323],[214,347],[186,337],[166,350],[147,334],[122,356],[86,374],[82,403],[144,415],[147,442],[122,464],[155,479],[179,444],[204,447],[262,456],[276,433],[264,406],[221,423],[201,444],[179,444],[151,437],[145,418],[183,413],[203,390],[189,375],[143,369],[90,372],[123,354],[119,342]],
        'cloth-simulation': [[24,91],[56,114],[126,137],[190,127],[253,93],[306,125],[372,137],[449,115],[484,91],[463,131],[375,169],[304,161],[258,139],[191,167],[128,172],[75,155],[48,133],[60,202],[147,240],[202,223],[259,204],[314,233],[364,239],[414,220],[454,194],[448,263],[363,309],[299,296],[259,275],[202,299],[136,307],[84,285],[66,269],[65,336],[113,369],[180,374],[243,349],[257,342],[301,365],[369,377],[448,336],[449,398],[369,440],[300,430],[257,402],[200,436],[136,444],[81,414],[66,398],[55,163],[27,94],[62,111],[85,414],[140,442],[126,138],[196,124],[199,223],[200,299],[192,364],[201,432],[264,403],[257,345],[253,274],[262,205],[255,135],[253,98],[305,129],[305,163],[319,236],[304,299],[306,366],[302,426],[370,441],[369,375],[364,307],[366,242],[376,167],[376,139],[448,118],[421,218],[426,329],[422,417],[450,394],[451,333],[451,258],[448,196],[461,132]],
        'numbers-to-words': [[152,113],[154,94],[169,82],[185,81],[197,98],[203,112],[185,135],[151,113],[174,81],[205,95],[230,98],[231,83],[230,134],[235,96],[244,85],[266,86],[272,137],[270,104],[340,110],[331,83],[307,86],[294,112],[308,131],[333,135],[339,126],[333,136],[333,153],[139,149],[24,204],[25,282],[25,243],[38,231],[60,229],[66,280],[66,244],[96,244],[96,225],[99,275],[117,281],[137,267],[138,228],[137,285],[138,243],[171,239],[171,226],[172,281],[173,244],[190,230],[210,235],[211,281],[211,268],[242,265],[246,240],[259,228],[279,236],[287,246],[288,280],[285,266],[261,281],[241,267],[265,281],[286,267],[287,214],[290,235],[313,240],[315,224],[315,278],[316,242],[339,231],[316,244],[342,228],[359,241],[368,227],[397,231],[402,248],[356,248],[363,272],[382,278],[398,270],[424,267],[434,232],[453,229],[467,237],[470,208],[470,280],[470,272],[429,270],[452,278],[452,301],[76,303],[78,396],[95,426],[121,414],[98,424],[78,396],[126,395],[109,371],[75,396],[155,395],[153,371],[154,427],[155,395],[183,397],[195,424],[221,415],[226,371],[224,440],[204,450],[185,436],[198,449],[225,442],[228,385],[204,370],[180,394],[202,374],[230,384],[264,387],[263,349],[264,424],[265,387],[293,375],[304,397],[304,424],[304,402],[294,374],[265,385],[295,377],[304,399],[338,399],[337,356],[336,420],[351,426],[337,421],[336,371],[349,372],[321,369],[368,370],[387,427],[411,374],[379,443],[258,447]],
        'particle-system': [[208,211],[230,186],[256,185],[289,208],[276,258],[238,269],[205,243],[204,213],[231,187],[261,185],[291,207],[284,253],[239,265],[204,247],[118,257],[107,219],[78,233],[74,279],[94,293],[116,263],[206,248],[193,263],[201,311],[224,325],[236,289],[236,269],[281,252],[293,223],[373,203],[384,177],[409,166],[424,194],[413,230],[390,241],[377,203],[293,226],[240,274],[239,297],[232,355],[266,376],[268,411],[233,404],[217,370],[231,359],[224,324],[238,271],[201,241],[214,200],[245,183],[231,103],[263,102],[280,77],[237,64],[194,77],[176,101],[192,104],[229,104]],
        'drip-sessions': [[71,211],[128,177],[179,97],[188,66],[101,141],[65,214],[23,292],[25,313],[92,292],[131,242],[90,295],[96,308],[149,303],[187,246],[185,262],[206,300],[203,310],[145,306],[204,312],[243,291],[285,202],[312,177],[284,205],[266,241],[231,240],[328,229],[262,242],[243,299],[269,318],[309,292],[338,245],[371,244],[358,263],[326,267],[313,292],[358,308],[418,241],[386,311],[415,254],[464,229],[433,296],[436,316],[490,280],[482,362],[488,280],[433,319],[429,392],[435,319],[459,240],[406,269],[401,378],[396,296],[385,315],[392,289],[353,312],[351,371],[352,312],[308,294],[301,393],[306,298],[257,319],[255,401],[257,317],[235,299],[222,301],[220,399],[224,304],[159,319],[155,401],[152,307],[100,309],[98,362],[96,306],[90,295],[42,315],[44,397],[45,314],[23,286],[70,215],[131,182],[128,229],[129,181],[186,99],[185,177],[184,97]],
        'robotic-arm': [[235,228],[255,221],[271,232],[277,244],[258,267],[230,258],[227,242],[234,229],[241,232],[260,231],[263,254],[247,260],[237,248],[242,230],[266,246],[239,242],[258,259],[238,252],[229,262],[278,361],[299,374],[311,356],[296,341],[282,350],[287,364],[301,367],[302,354],[291,352],[287,363],[298,358],[298,365],[285,348],[301,330],[276,246],[304,333],[376,273],[390,266],[395,283],[387,289],[378,283],[375,275],[375,289],[386,289],[305,370],[397,283],[487,268],[487,205],[458,131],[410,71],[341,29],[268,8],[183,19],[114,47],[60,101],[15,190],[14,273],[38,351],[96,432],[178,476],[257,487],[364,459],[428,408],[473,336],[488,269]]
    };

    for (var name in coordinates){
        coordinates[name] = coordinates[name].map(function(point){
            var offsets = [50, 12.5];
            return point.map(function(coord, index){
                return (100 * coord / 500) + offsets[index];
            });
        });
    }

    exports.Experiments = {
        get: function(name){
            return coordinates[name];
        }
    };

})(window);