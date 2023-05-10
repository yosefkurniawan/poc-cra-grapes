import React, { useEffect, useState } from 'react';
import 'grapesjs/dist/css/grapes.min.css';
import grapesjs from 'grapesjs';
import plugin from 'grapesjs-preset-webpage';
import basic from 'grapesjs-blocks-basic';
import forms from 'grapesjs-plugin-forms';
import autoSuggestClasses from 'grapesjs-ui-suggest-classes';
import navbar from 'grapesjs-navbar';
import tabs from 'grapesjs-tabs';
import tooltip from 'grapesjs-tooltip';
import customCode from 'grapesjs-custom-code';
 


export default function Container() {
    let editor;
    
    useEffect(() => {
          editor = grapesjs.init({
            container : '#gjs',
            plugins: [
                plugin, 
                basic,
                forms,
                autoSuggestClasses,
                navbar,
                tabs,
                tooltip,
                customCode,
            ],
            pluginsOpts: {
                plugin: {},
                basic: {},
                forms: {},
                autoSuggestClasses: {},
                navbar: {},
                styleFilter: {},
                tabs: {},
                tooltip: {},
                customCode: {},
            },
        });
        editor.BlockManager.add('my-first-block', {
            label: 'Simple block',
            category: 'Icube',
            media: `<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 442.761 442.762" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M237.082,31.617c-113.596,0-205.681,84.96-205.681,189.764c0,28.473,6.809,55.473,18.986,79.711L1.735,389.064 c-2.703,4.887-2.215,10.916,1.239,15.307c2.673,3.396,6.721,5.299,10.912,5.299c1.223,0,2.457-0.162,3.674-0.498l106.505-29.232 c32.435,19.719,71.269,31.205,113.017,31.205c113.594,0,205.68-84.959,205.68-189.764 C442.761,116.577,350.675,31.617,237.082,31.617z"></path> </g> </g></svg>`,
            content: `<div class="test-gjs-block my-block margin-only" 
            style="box-sizing: border-box; height: 100px; margin: 10vh 0 0 0; text-align: center;">
            Woi Cuk</div>`,
        });
        editor.BlockManager.add('header', {
            label: 'Header',
            category: 'Icube',
            media: `<svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 471.781 471.781" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M462.125,18.831H186.286c-5.335,0-9.658,4.325-9.658,9.659v74.072c-11.798,1.852-27.33,6.134-42.855,15.806 c-13.645,8.5-20.021,20.582-20.677,39.174c-0.002,0.056-0.003,0.111-0.003,0.169l0.047,0.001l-0.03,31.192l-0.01,0.003 c-0.22,0.064-0.436,0.145-0.646,0.238c-3.234,1.455-4.927,0.799-5.33,7.595c-0.458,7.741,0.887,28.19,9.237,33.292 c1.251,1.283,2.076,4.788,2.57,8.688c0.924,7.297,1.972,15.567,6.088,20.981c9.372,12.327,6.91,31.403,6.701,32.886 c-0.033,0.021-0.078,0.049-0.138,0.077c-5.775,2.593-7.292,7.644-8.4,11.336l-0.568,1.833c-1.495,4.816-2.908,9.371-4.855,13.694 c-0.262,0.376-1.391,1.271-2.854,1.821l-4.267,1.637c-26.976,10.342-54.87,21.033-80.775,35.354 C5.376,371.874,0.227,445.181,0.02,447.509c-0.125,1.396,0.344,2.783,1.292,3.816c0.948,1.035,2.286,1.625,3.689,1.625h178.672 h178.672c1.403,0,2.742-0.59,3.688-1.625c0.947-1.033,1.416-2.42,1.292-3.816c-0.208-2.328-5.355-75.635-29.843-89.17 c-25.905-14.32-53.799-25.013-80.774-35.354l-4.268-1.637c-1.463-0.553-2.592-1.445-2.854-1.821 c-1.948-4.323-3.36-8.878-4.855-13.694L244.164,304c-1.108-3.692-2.625-8.743-8.4-11.336c-0.06-0.028-0.105-0.056-0.138-0.077 c-0.209-1.48-2.67-20.559,6.701-32.886c4.115-5.414,5.164-13.687,6.088-20.981c0.494-3.898,1.317-7.404,2.569-8.688 c4.068-2.485,6.472-8.615,7.815-15.143h75.209v62.786c0,3.905,2.353,7.428,5.963,8.924c1.194,0.494,2.449,0.735,3.693,0.735 c2.513,0,4.983-0.981,6.832-2.829l70.098-69.615h41.528c5.335,0,9.658-4.324,9.658-9.659V28.49 C471.783,23.156,467.46,18.831,462.125,18.831z M446.783,189.889h-26.188h-10.305l-7.312,7.261l-43.97,43.667v-25.928v-25h-25 h-77.238c-0.558-0.214-1.18-0.43-1.879-0.744c-0.209-0.094-0.425-0.174-0.646-0.238l-0.011-0.003l0.011-31.189 c-0.02-15.871-3.871-26.547-11.78-32.636c-3.5-2.695-7.519-5.218-11.405-7.658c-5.379-3.376-10.94-6.868-12.955-9.599 c-2.876-3.9-10.115-5.525-16.479-6.183V43.831h245.155L446.783,189.889L446.783,189.889z"></path> <circle cx="279.206" cy="119.402" r="14"></circle> <circle cx="324.205" cy="119.402" r="14"></circle> <circle cx="369.205" cy="119.402" r="14"></circle> </g> </g> </g></svg>`,
            content: {
                tagName: 'div',
                attributes: { 'some-attribute': 'some-value' },
                components: [
                  {
                      tagName: 'span',
                      content: '<img data-pagespeed-no-defer="true" style="top:0;left:0;object-fit:cover" src="https://thumbor.sirclocdn.com/unsafe/120x52/filters:format(jpeg):quality(80)/b2cdemo.getswift.asia/media/logo/stores/1/icube_swift-07_copy3.png" alt="Magento Commerce" width="120" height="52" class="jsx-2611454927 img header-middle__logo-link">',
                      draggable: false,
                  }, {
                      tagName: 'div',
                      // use `content` for static strings, `components` string will be parsed
                      // and transformed in Components
                      components: '<span>HTML at some point</span>',
                  }, {
                      tagName: 'div',
                      // use `content` for static strings, `components` string will be parsed
                      // and transformed in Components
                      components: `<ul>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Accessories</li>
                      </ul>`,
                  }
                ]
            }
        });
        
        editor.DomComponents.addType('product-list', {
          model: {
              defaults: {
                  items: null,
                  url: 'https://b2cdemo.getswift.asia/graphql'
              },
              init() {
                  fetch(this.attributes.url, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                      query: `
                          query {
                            products(search: "jacket", pageSize: 10) {
                              items {
                                name
                                sku
                                url_key
                                price_range {
                                  minimum_price {
                                    final_price {
                                      value
                                      __typename
                                    }
                                  }
                                }
                                small_image {
                                  url
                                }
                              }
                            }
                          }
                        `,
                      variables: {
                        now: new Date().toISOString(),
                      },
                    }),
                  }).then(response => response.json())
                    .then(data => {
                        this.set('items', data.data.products.items);
                    });

                  this.listenTo(this, 'change:items', this.handlePropChange);
                  // Here we can listen global hooks with editor.on('...')
              },
              updated(property, value, prevValue) {
                  console.log('Local hook: model.updated',
                      'property', property, 'value', value, 'prevValue', prevValue);
              },
              removed() {
                  console.log('Local hook: model.removed');
              },
              handlePropChange() {
                  console.log('props changed');
                  let items = this.get('items');
                  console.log('items');
                  console.log(items);
                  let comp1 = '<div>' +
                      '<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" />' +
                      '<span title="foo">oioio</span>' +  '</div>';
                  let comp2 = (
                    <ul>
                      {items.map(item => 
                        <li key={item.sku}> 
                          <div>
                            <img src={item.small_image.url} />
                          </div>
                          <div>
                            {item.name} 
                          </div>
                        </li>
                      )}
                    </ul>
                  )
                  const component = editor.addComponents(comp2);
                  return component
              }
          },
          view: {
              init() {
                  console.log('Local hook: view.init');
              },
             
          },
      });
      // A block for the custom component
      editor.BlockManager.add('product-list', {
        label: 'Test Component',
        content: `<h2>Product List</h2><div data-gjs-type="product-list"></div>`,
      });
      
      // Add a "Save" button to the editor
      editor.Commands.add('save', {
        run: function(editor, sender) {
          const html = editor.getHtml();
          const win = window.open();
          win.document.write(html);
        }
      });

    }, [])

    const handleSave = () => {
      editor.runCommand('save');
    }
    
  return (
    <>
      <div id="gjs"></div>
      <div>
        <button id="save-button" onClick={handleSave}>Save</button>
      </div>
    </>
  )
}
