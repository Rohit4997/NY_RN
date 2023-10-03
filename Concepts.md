Concepts :- 


* Arrow Functions
    // ES5
    var x = function(x, y) {
    return x * y;
    }

    // ES6
    const x = (x, y) => x * y;

* JSX :- HTML with JavaScript together
    variables can be used in via {varName}

* State :- state is used to reRender the UI when any state variable is changed
    ex. const[buttonText, setButtonText] = useState(" Get Started");
        to change the state, Just call setButtonText function.

* Props :- we can send any type of data in form of props in components and screens
    ex. const Header = (props: any) => {
        console.log(props);
        return (
            <View>
            <Text>Header</Text>
            </View>
        )
        }

* Styling :-
    - inLine style and external style
    - both can be used at same time 
        ex. style = {[style1, style2, {color : 'red'}]}

* FlatList :- (Like recyclerview) it takes array in input and produces the output

* textAlign :- Horizontal alignment of text

* textAlignVertical :- Vertical alignment of text

* flexDirection :- 'row' -> horizontal, 'column' -> vertical

* flex 1 = weight 1

* flexbox implementation :- {flex : 1, flexDirection : 'row', flexWrap : 'wrap'}

* rendeItem :- onBindViewHolder

* SectionList  :- nestedArray Items (property renderSelectionHeader)

* Lifecycle :- 
    - mounting -> onCreate
    - updating -> 
    - unMounting -> onDestroy