import { option } from "framer-motion/client";

[option, setOption] = useState("");

<SafeAreaView>
    <View
        style={{
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#fd5c63'
        }}
    >
        <Text style={{flex:1, color:'white'}}>Back</Text>
        <View style={{flex:1}}>
            <Text style={{color:'white', fontSize: 16, fontWeight: 'bold'}}></Text>
        </View>
        <Text style={{flex:1, color:'white'}}>Delete</Text>
    </View>

    <View style={{marginVertical:12, flexDirection: 'row', alignItems: 'center', gap:12, alignSelf: 'center'}}>
        <Pressable onPress={()=> setOption("Desayuno")} style={{paddingHorizontal: 12, paddingVertical: 6, backgroundColor: option == "Desayuno" ? '#fd5c63' : 'white', borderRadius: 25}}>
            <Text style={{fontSize:14, fontWeight: "600", color: option == 'Desayuno' ?'white':'black'}}>Desayuno</Text>
        </Pressable>
        <Pressable onPress={()=> setOption("Almuerzo")} style={{paddingHorizontal: 12, paddingVertical: 6, backgroundColor: option == "Almuerzo" ? '#fd5c63' : 'white', borderRadius: 25}}>
            <Text style={{fontSize:14, fontWeight: "600", color: option == 'Almuerzo' ?'white':'black'}}>Almuerzo</Text>
        </Pressable>
        <Pressable onPress={()=> setOption("Merienda")} style={{paddingHorizontal: 12, paddingVertical: 6, backgroundColor: option == "Merienda" ? '#fd5c63' : 'white', borderRadius: 25}}>
            <Text style={{fontSize:14, fontWeight: "600", color: option == 'Merienda' ?'white':'black'}}>Merienda</Text>
        </Pressable>
        <Pressable onPress={()=> setOption("Cena")} style={{paddingHorizontal: 12, paddingVertical: 6, backgroundColor: option == "Cena" ? '#fd5c63' : 'white', borderRadius: 25}}>
            <Text style={{fontSize:14, fontWeight: "600", color: option == 'Cena' ?'white':'black'}}>Cena</Text>
        </Pressable>
    </View>

    <Pressable style={{backgroundColor: 'white', borderRadius:8, padding: 10, width: '85%', height: 80, marginVertical: 12}}>
        <Text style={{textAlign:'center', fontSize: 12, fontWeight: '600', color: 'gray'}}>
            No hay menu
        </Text>
    </Pressable>
    <View style={{marginTop:15, marginHorizontal: 10, flexDirection:'row', gap:10}}>
        <TextInput style={{backgroundColor: 'white', borderRadius:8, padding: 10, flex: 1}} placeholder="Plato" />
        <Pressable style={{padding:10, backgroundColor: "#fd5c63", borderRadius: 6}}>
            <Text style={{fontSize: 15, fontWeight: '500', color: 'white', textAlign: 'center', width: 60}}>Agregar</Text>
        </Pressable>
    </View>
</SafeAreaView>