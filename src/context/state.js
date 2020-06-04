
import React, { useReducer } from 'react'
import Context from './context'
import Reducer from './reducer'
import { FILTER } from "./types";
export const State = (props) => {
    const initialState = {
        filters:{
        genrateFilter:false,
        txtNumber:"",
        btnRadioType:"",
        check:false,
        },
        filterGuest: false,
        search: null,
        editAble: null,
        headerState: {
            mainTitle: "Lorem Ipsum",
            mainDescritionTop: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
            mainDescritionbottom: "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain...",
        },
        mainState:{
            paragraph1:{
                title:"What is Lorem Ipsum?",
                description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            },
            paragraph2:{
                title:"Why do we use it?",
                description:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
            },
            paragraph3:{
                title:"Where does it come from?",
                description1:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32.",
                description2:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum  by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham"
            },
            paragraph4:{
                title:"Where can I get some?",
                description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
            },
        },
        dummyParagrphState:{
            paragraph1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo vitae mi quis aliquam. Fusce nec libero eu enim consequat hendrerit. Nam nec risus sed quam sollicitudin pulvinar vitae at nunc. Curabitur maximus molestie est, et gravida ante feugiat eget. Fusce ultricies enim in nulla lacinia aliquam. Ut euismod elit at ex commodo accumsan. Vestibulum vel elementum lorem, in ultrices lorem. Mauris accumsan, felis id condimentum rhoncus, nisl nunc feugiat nunc, sed dictum lectus nibh nec enim. Aliquam a sodales quam, id fermentum metus. Maecenas fermentum auctor quam sit amet pellentesque. Praesent id hendrerit diam, ut hendrerit dolor. Praesent quis lacinia risus. Nunc eget tellus et quam vestibulum pretium. Nam vel ipsum augue. Vestibulum eget suscipit libero. Donec tempor in nisl sit amet euismod.",
            paragraph2:"Proin aliquam lacus tincidunt odio euismod consequat ut et massa. In mollis, diam ac placerat feugiat, lorem felis vulputate nibh, quis facilisis erat tellus eget arcu. Pellentesque viverra, nisi ultricies porta eleifend, sapien augue blandit magna, fermentum laoreet ante felis ut elit. Quisque faucibus elit ultricies volutpat mollis. Quisque sollicitudin ut erat et rutrum. Aliquam porttitor turpis a ante condimentum, porta egestas urna aliquam. In elementum nulla lacus, eu sodales quam auctor ut.",
            paragraph3:"lit. Nullam varius tristique odio, sed pharetra urna vehicula in. Aliquam tristique id tellus eu vulputate. Aenean tempor augue dignissim nibh ultricies, sit amet fringilla est mattis. Sed consequat dictum nibh a scelerisque. Nulla maximus ullamcorper lectus, ac vehicula tortor convallis vel. Duis ac blandit magna, posuere lacinia dolor. Sed eget ligula eu ex molestie sagittis.",
            paragraph4:"Cras augue ipsum, vulputate sed lorem in, facilisis tristique augue. Nunc sit amet tempor sem. Nunc nec sollicitudin turpis. Quisque pellentesque suscipit est, sit amet vehicula leo eleifend in. Cras nibh nisl, ultrices nec commodo ut, porttitor vel purus. Suspendisse maximus massa erat, eget vestibulum purus tincidunt sit amet. In efficitur vitae metus at semper. Fusce sed augue eget velit suscipit dignissim in at mi. Nulla ac semper nisl. Integer tincidunt, justo ut dapibus efficitur, quam tortor bibendum nibh, ac pharetra dolor libero a dui. Nam at volutpat nisi. Etiam malesuada mi vel metus tempus, a fringilla tortor mattis. Donec a metus in libero feugiat commodo molestie eu ipsum. Suspendisse dignissim a dui vel ornare",
            list1:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo",
            list2:"Proin aliquam lacus tincidunt odio euismod consequat ut et massa. In mollis,",
            list3:"lit. Nullam varius tristique odio, sed pharetra urna vehicula in. Aliquam ",
            list4:"Cras augue ipsum, vulputate sed lorem in, facilisis tristique augue.",
        }
        
    }
    const [state, dispatch] = useReducer(Reducer, initialState)
    
    const filterMethod = filters => {
        dispatch({
            type: FILTER,
            payload: filters
        })
    }
    
    return (
        <Context.Provider
            value={{
                filterGuest: state.filterGuest,
                name: state.name,
                headerState:state.headerState,
                mainState:state.mainState,
                filters:state.filters,
                dummyParagrphState:state.dummyParagrphState,
                filterMethod
            }}
        >
            {props.children}</Context.Provider>
    )
}
export default State
