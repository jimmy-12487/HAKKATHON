var answers = {};
        var training = [];
        $(document).ready(function() {
            training.push(makedata('', '', '自己', '', '', '', false));
            training.push(makedata('', '', '自己', '', '', '', false));
            
            training.push(makedata('', '', '解除分期付款', '銀行', '', '', true));
            
            training.push(makedata('', '', '和網購賣家私下交易', '賣家', '', '一頁式廣告', true));
            training.push(makedata('', '', '和網購賣家私下交易', '賣家', '', '個人帳號無與倫比', true));
            training.push(makedata('', '', '和網購賣家私下交易', '賣家', '', '沒有使用網購平台', true));
            training.push(makedata('', '', '和網購賣家私下交易', '賣家', '', '近期有下單', true));
            training.push(makedata('', '', '和網購賣家私下交易', '賣家', '', '', false));
            
            training.push(makedata('', '', '親友急用', '親友', '', '大量個資', true));
            training.push(makedata('', '', '親友急用', '親友', '', '真實人名', true));
            training.push(makedata('', '', '親友急用', '親友', '', '欠錢還不出來', true));
            training.push(makedata('', '', '親友急用', '親友', '', '哈哈是我啦', true));
            training.push(makedata('', '', '親友急用', '親友', '', '', false));
            
            training.push(makedata('', '', '親友被綁架', '綁匪', '', '', true));
            
            training.push(makedata('', '', '轉匯', '檢調單位', '', '大量個資', true));
            
            training.push(makedata('', '', '中獎繳稅', '地政事務所', '', '過戶費', true));
            training.push(makedata('', '', '中獎繳稅', '地政事務所', '', '大量隱私個資', true));
            training.push(makedata('', '', '中獎繳稅', '公家機關', '', '確認帳戶餘額', true));
            training.push(makedata('', '', '中獎繳稅', '公家機關', '', '索取存款帳號', true));
            training.push(makedata('', '', '中獎繳稅', '公家機關', '', '核退某筆稅', true));
            training.push(makedata('', '', '中獎繳稅', '公家機關', '', '', false));
            training.push(makedata('', '', '中獎繳稅', '廠商', '', '會員費', true));
            training.push(makedata('', '', '中獎繳稅', '廠商', '', '先付印花稅', true));
            training.push(makedata('', '', '中獎繳稅', '廠商', '', '', false));
            
            training.push(makedata('', '', '投資', '顧問', '', '穩賺不賠', true));
            training.push(makedata('', '', '投資', '顧問', '', '沒有見過面', true));
            training.push(makedata('', '', '投資', '顧問', '', '', false));
            training.push(makedata('', '', '投資', '銀行', '', '推薦單一商品', true));
            training.push(makedata('', '', '投資', '銀行', '', '沒有聽過的服務或銀行', true));
            training.push(makedata('', '', '投資', '銀行', '', '', false));
            
            training.push(makedata('', '', '解除分期付款', '銀行', '', '', true));
        });



        $(document).ready(function() {
            //pages init
            $('#todo').hide();
            $('#costpage').hide();
            $('#reason').hide();
            $('#aquaintance').hide();
            $('#contact').hide();
            $('#weibird').hide();
            $('#papa').hide();
          
            // todo buttons
            function todos(text) {
                answers['todo'] = text;
                $('#todo').hide();
                if (text == 'trans')
                    $('#costpage-header').text('轉帳 金額約為');
                else
                    $('#costpage-header').text('提款 金額約為');
                    
                costpageSETUP();
                $('#costpage').show();
            }
            
            $('#trans').click(function() {
                todos('trans');
            });
          
            $('#withdraw').click(function() {
                todos('withdraw');
            });
          
            $('#mainpage').click(function(){
              $('#main').hide();
              $('#todo').show();
            });

            //costpage buttons
            function costpageSETUP() {
                var range = ['5,000 元以內', '5,000 元至 10,000 元', '10,000 元至 100,000 元', '100,000 元以上'];
                for (var i = 0; i < range.length; i++)
                    $('#costbtn' + i.toString() ).append("<p id='cost" + i.toString() + "' class='u-align-center u-text u-text-2'>" + range[i] +"</p>");
              
                for (var i = 0; i < range.length; i++) {
                    $('#cost' + i.toString()).click(function() {
                        answers['cost'] = range[this.id[4]];
                        $('#costpage').hide();
                        if(answers['cost'] == '5,000 元以內'){
                            $('#costpage').hide();
                            $('#main').show();
                        }
                        else{
                            reasonpageSETUP();
                            $('#reason').show();
                        }
                    });
                }
            }
          
            //reasonpage buttons
            function reasonpageSETUP() {
                let reasons = ['自己', '解除分期付款', '網購交易', '親友急用', '親友被綁架', '中獎繳稅', '投資'];
                
                for (var i = 0; i < reasons.length; i++) {
                    $('#why' + i.toString()).click(function() {
                        answers['reason'] = reasons[this.id[3]];
                        $('#reason').hide();
                        if(answers['reason'] == '自己'){
                            $('#main').show();
                        } else if (answers['reason'] == '解除分期付款'){
                            weibirdSETUP();
                            $('#weibird').show();
                        } else{
                            aquaintanceSETUP();
                            $('#aquaintance').show();
                        }
                    });
                }
            }
          
            //aquaintance buttons
            function aquaintanceSETUP() {
                var aq = [];
                if(answers['reason'] == '網購交易')
                    aq = ['賣家'];
                else if(answers['reason'] == '親友急用')
                    aq = ['親友'];
                else if(answers['reason'] == '親友被綁架')
                    aq = ['綁匪'];
                else if(answers['reason'] == '轉匯')
                    aq = ['檢調單位'];
                else if(answers['reason'] == '中獎繳稅')
                    aq = ['地政事務所', '公家機關', '廠商'];
                else if(answers['reason'] == '投資')
                    aq = ['證券投資顧問', '銀行'];

                for (var i = 0; i < aq.length; i++) {
                    $('#people' + i.toString()).click(function() {
                        answers['identity'] = aq[this.id[6]];
                        $('#aquaintance').hide();
                        contactSETUP();
                        $('#weibird').show();
                    });
                }
            }
          
            //contact buttons
            function contactSETUP() {
                let contact = ['電話', '簡訊', '電子郵件', '社群軟體私訊', '本人當面溝通'];
                for (var i = 0; i < contact.length; i++)
                    $('.contactbtn-holder').append("<button id='contact" + i.toString() + "' class='button button1'>" + contact[i] + "</button>");

                for (var i = 0; i < contact.length; i++) {
                    $('#contact' + i.toString()).click(function() {
                        answers['contact'] = contact[this.id[7]];
                        $('#contact').hide();
                        weibirdSETUP();
                        $('#weibird').show();
                    });
                }
            }
            
          
            function weibirdSETUP() {
                if(answers['reason'] != '解除分期付款'){
                    let NB = new NaiveBayes();
                    var p = NB.test(training, answers);
                    console.log(NB);
                    if (p <= 50){
                        $('#weibird1').hide();  
                        $('#weibirdwarning').text('此事由為詐騙機率較低！您決定...');
                    }else{
                        $('#weibirdwarning').text('此事由為詐騙機率較高！您決定...');
                    }
                }
                else{
                    $('#weibird0').hide();  
                    var p = 100;
                }
                $('#percentage').text('詐騙機率為 ' + p +  '% ');
                $('#weibird0').click(function() {
                    $('#weibird').hide();
                    $('#main').show();
                }); 
                $('#weibird1').click(function() {
                    $('#weibird').hide();
                    $('#papa').show();
                });
            }
            
          
            function papaSETUP() {
                let papa = [];
                if (answers['contact'] == '電話') {
                    $('.papabtn-holder').append("<button id='papa0' class='button button1'>撥打反詐騙專線</button>");
                    $('#papa0').click(function(){
                        $('#papa0').hide();
                        $('#papa1').hide();
                        $('.papainfo').append("someinfos");
                        $('.papabtn-holder').append("<button id='papa3' class='button button1'>回到首頁</button>");
                        $('#papa3').click(function(){
                            //to main page;
                        });
                    });

                    $('.papabtn-holder').append("<button id='papa1' class='button button1'>打給本人確認看看</button>");
                    $('#papa1').click(function(){
                        $('#papa0').hide();
                        $('#papa1').hide();
                        $('.papainfo').append("someinfos");
                        $('.papabtn-holder').append("<button id='papa3' class='button button1'>回到首頁</button>");
                        $('#papa3').click(function(){
                            //to main page;
                        });
                    });
                } else {
                    $('.papabtn-holder').append("<button id='papa0' class='button button1'>是！</button>");
                    $('#papa0').click(function(){
                        $('#papa0').hide();
                        $('#papa1').hide();
                        $('.papap').hide();
                        $('.papainfo').append("someinfos");
                        $('.papabtn-holder').append("<button id='papa3' class='button button1'>回到首頁</button>");
                        $('#papa3').click(function(){
                            //to main page;
                        });
                    });
                    $('.papabtn-holder').append("<button id='papa1' class='button button1'>好像不太一樣耶</button>");
                    $('#papa1').click(function(){
                        $('#papa0').hide();
                        $('#papa1').hide();
                        $('.papap').hide();
                        $('.papainfo').append("someinfos");
                        $('.papabtn-holder').append("<button id='papa3' class='button button1'>回到首頁</button>");
                        $('#papa3').click(function(){
                            //to main page;
                        });
                    });
                    $('.papap').append("<p>您收到的內容是否類似以下形式？</p>");
                }
            }
            papaSETUP();
          });
          
          // bayes classification
          // todo, cost, reason, identity, contact, feature, isScam
          
            function makedata(_todo, _cost, _reason, _identity, _contact, _feature, _isScam){
                return {'todo': _todo, 'cost': _cost, 'reason': _reason, 'identity': _identity, 'contact': _contact, 'feature': _feature, 'isScam': _isScam};
            }
          
            function NaiveBayes(){
                this.test = function(training, testing, alpha = 1.5){
                    this.testing = testing;
                    this.training = training;
                        
                    this.base = 0;
                    this.x = 0;
                    this.c = 0;
                    this.xunderc = 0;
                    
                    for(var i = 0; i < training.length; i++){
                        if(training[i]['isScam'] && training[i]['reason'] == testing['reason'] && training[i]['identity'] == testing['identity'])
                            this.xunderc++;
                        if(training[i]['isScam'] && training[i]['reason'] == testing['reason'])
                            this.c++;
                        if(training[i]['reason'] == testing['reason'] && training[i]['identity'] == testing['identity'])
                            this.x++;
                        if(training[i]['reason'] == testing['reason'])
                            this.base++;
                    }
                    return ((this.xunderc + alpha) / (this.base + alpha * this.c)) * (this.c / this.base) / (this.x / this.base) * 100;
                };
            }