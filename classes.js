function setupClassTable(){

    let temp1 = $("#class1 option:selected").val()
    let temp2 = $("#class2 option:selected").val()
    let c1 = Math.min(temp1, temp2)
    let c2 = Math.max(temp1, temp2)

    let classTitle = ""
    let hd_col = ""
    let ab_col = ""
    let focus_col = ""
    let addit_col1 = ""
    let addit_col2 = ""
    let addit_col3 = ""
    let addit_col4 = ""
    let abi_id = []

    if (c1 === 10 && c2 === 10){

        classTitle = "전사"
        hd_col = warrior_hp
        ab_col = to_ten_ab
        focus_col = focus_war
        abi_id.push("s1000","s1001")

    } else if (c1 === 10 && c2 === 11){
        classTitle = "모험가 (전사/항마사)"
        hd_col = warrior_hp
        ab_col = to_ten_ab
        focus_col = focus_war
        addit_col1 = mageslayer_table
        abi_id.push("s1100")

    } else if (c1 === 10 && c2 === 20){
        classTitle = "모험가 (전사/전문가)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war_exp
        abi_id.push("s2001")

    } else if (c1 === 10 && c2 === 21){
        classTitle = "모험가 (전사/음유시인)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = bard_table
        abi_id.push("s2100")

    } else if (c1 === 10 && c2 === 22){
        classTitle = "모험가 (전사/현인)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = wise_table
        abi_id.push("s2200")

    } else if (c1 === 10 && c2 === 300){
        classTitle = "모험가 (전사/고마법사)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = partial_high_mage_table
        abi_id.push("s30001")

    } else if (c1 === 10 && c2 === 301){
        classTitle = "모험가 (전사/원소술사)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = partial_elem_table
        abi_id.push("s30101")

    } else if (c1 === 10 && c2 === 302){
        classTitle = "모험가 (전사/사령술사)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = partial_necro_table
        abi_id.push("s30201")

    } else if (c1 === 10 && c2 === 303){
        classTitle = "모험가 (전사/치유사)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = healer_table
        abi_id.push("s30300")

    } else if (c1 === 10 && c2 === 304){
        classTitle = "모험가 (전사/구도자)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = vowed_table
        abi_id.push("s30400")

    } else if (c1 === 10 && c2 === 305){
        classTitle = "모험가 (전사/소언사)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = partial_adunic_table
        abi_id.push("s30501")

    } else if (c1 === 10 && c2 === 306){
        classTitle = "모험가 (전사/변신술사)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = skinshifter_table
        abi_id.push("s30600")

    } else if (c1 === 10 && c2 === 307){
        classTitle = "모험가 (전사/결투가)"
        hd_col = expert_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = duelist_table
        abi_id.push("s30700","s30701")

    } else if (c1 === 10 && c2 === 308){
        classTitle = "모험가 (전사/야수조련사)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = beastmaster_table
        abi_id.push("s30800")

    } else if (c1 === 10 && c2 === 309){
        classTitle = "모험가 (전사/사제)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = priest_table
        abi_id.push("s30900")

    } else if (c1 === 10 && c2 === 310){
        classTitle = "모험가 (전사/생각 귀족)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = thought_noble_table
        abi_id.push("s31000")

    } else if (c1 === 10 && c2 === 311){
        classTitle = "모험가 (전사/저주받은 자)"
        hd_col = warrior_hp
        ab_col = to_seven_ab
        focus_col = focus_war
        addit_col1 = accursed_table
        abi_id.push("s31100")

    } else if (c1 === 11 && c2 === 20){
        classTitle = "모험가 (항마사/전문가)"
        hd_col = expert_hp
        ab_col = to_seven_ab
        focus_col = focus_exp
        addit_col1 = mageslayer_table
        abi_id.push("s1100","s2001")

    } else if (c1 === 11 && c2 === 21){
        classTitle = "모험가 (항마사/음유시인)"
        hd_col = expert_hp
        ab_col = to_seven_ab
        focus_col = focus_mage
        addit_col1 = mageslayer_table
        addit_col2 = bard_table
        abi_id.push("s1100","s2100")

    } else if (c1 === 11 && c2 === 22){
        classTitle = "모험가 (항마사/현인)"
        hd_col = expert_hp
        ab_col = to_seven_ab
        focus_col = focus_mage
        addit_col1 = mageslayer_table
        addit_col2 = wise_table
        abi_id.push("s1100","s2200")

    } else if (c1 === 20 && c2 === 20){
        classTitle = "전문가"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        abi_id.push("s2000","s2001")

    } else if (c1 === 20 && c2 === 21){
        classTitle = "모험가 (전문가/음유시인)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        abi_id.push("s2001","s2100")

    } else if (c1 === 20 && c2 === 22){
        classTitle = "모험가 (전문가/현인)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        abi_id.push("s2001","s2200")

    } else if (c1 === 20 && c2 === 300){
        classTitle = "모험가 (전문가/고마법사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = partial_high_mage_table
        abi_id.push("s2001","s30001")

    } else if (c1 === 20 && c2 === 301){
        classTitle = "모험가 (전문가/원소술사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = partial_elem_table
        abi_id.push("s2001","s30101")

    } else if (c1 === 20 && c2 === 302){
        classTitle = "모험가 (전문가/사령술사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = partial_necro_table
        abi_id.push("s2001","s30201")

    } else if (c1 === 20 && c2 === 303){
        classTitle = "모험가 (전문가/치유사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = healer_table
        abi_id.push("s2001","s30300")

    } else if (c1 === 20 && c2 === 304){
        classTitle = "모험가 (전문가/구도자)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = vowed_table
        abi_id.push("s2001","s30400")

    } else if (c1 === 20 && c2 === 305){
        classTitle = "모험가 (전문가/소언사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = partial_adunic_table
        abi_id.push("s2001","s30501")

    } else if (c1 === 20 && c2 === 306){
        classTitle = "모험가 (전문가/변신술사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = skinshifter_table
        abi_id.push("s2001","s30600")

    } else if (c1 === 20 && c2 === 307){
        classTitle = "모험가 (전문가/결투가)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = duelist_table
        abi_id.push("s2001","s30700")

    } else if (c1 === 20 && c2 === 308){
        classTitle = "모험가 (전문가/야수조련사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = beastmaster_table
        abi_id.push("s2001","s30800")

    } else if (c1 === 20 && c2 === 309){
        classTitle = "모험가 (전문가/사제)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = priest_table
        abi_id.push("s2001","s30900")

    } else if (c1 === 20 && c2 === 310){
        classTitle = "모험가 (전문가/생각 귀족)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = thought_noble_table
        abi_id.push("s2001","s31000")

    } else if (c1 === 20 && c2 === 311){
        classTitle = "모험가 (전문가/저주받은 자)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = accursed_table
        abi_id.push("s2001","s31100")

    } else if (c1 === 21 && c2 === 22){
        classTitle = "모험가 (음유시인/현인)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = wise_table
        abi_id.push("s2100","s2200")

    } else if (c1 === 21 && c2 === 300){
        classTitle = "모험가 (음유시인/고마법사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = partial_high_mage_table
        abi_id.push("s2100","s30001")

    } else if (c1 === 21 && c2 === 301){
        classTitle = "모험가 (음유시인/원소술사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = partial_elem_table
        abi_id.push("s2100","s30101")

    } else if (c1 === 21 && c2 === 302){
        classTitle = "모험가 (음유시인/사령술사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = partial_necro_table
        abi_id.push("s2100","s30201")

    } else if (c1 === 21 && c2 === 303){
        classTitle = "모험가 (음유시인/치유사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = healer_table
        abi_id.push("s2100","s30300")

    } else if (c1 === 21 && c2 === 304){
        classTitle = "모험가 (음유시인/구도자)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = vowed_table
        abi_id.push("s2100","s30400")

    } else if (c1 === 21 && c2 === 305){
        classTitle = "모험가 (음유시인/소언사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = partial_adunic_table
        abi_id.push("s2100","s30501")

    } else if (c1 === 21 && c2 === 306){
        classTitle = "모험가 (음유시인/변신술사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = skinshifter_table
        abi_id.push("s2100","s30600")

    } else if (c1 === 21 && c2 === 307){
        classTitle = "모험가 (음유시인/결투가)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = duelist_table
        abi_id.push("s2100","s30700")

    } else if (c1 === 21 && c2 === 308){
        classTitle = "모험가 (음유시인/야수조련사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = beastmaster_table
        abi_id.push("s2100","s30800")

    } else if (c1 === 21 && c2 === 309){
        classTitle = "모험가 (음유시인/사제)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = priest_table
        abi_id.push("s2100","s30900")

    } else if (c1 === 21 && c2 === 310){
        classTitle = "모험가 (음유시인/생각 귀족)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = thought_noble_table
        abi_id.push("s2100","s31000")

    } else if (c1 === 21 && c2 === 311){
        classTitle = "모험가 (음유시인/저주받은 자)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = bard_table
        addit_col2 = accursed_table
        abi_id.push("s2100","s31100")

    } else if (c1 === 22 && c2 === 300){
        classTitle = "모험가 (현인/고마법사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = partial_high_mage_table
        abi_id.push("s2200","s30001")

    } else if (c1 === 22 && c2 === 301){
        classTitle = "모험가 (현인/원소술사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = partial_elem_table
        abi_id.push("s2200","s30101")

    } else if (c1 === 22 && c2 === 302){
        classTitle = "모험가 (현인/사령술사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = partial_necro_table
        abi_id.push("s2200","s30201")

    } else if (c1 === 22 && c2 === 303){
        classTitle = "모험가 (현인/치유사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = healer_table
        abi_id.push("s2200","s30300")

    } else if (c1 === 22 && c2 === 304){
        classTitle = "모험가 (현인/구도자)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = vowed_table
        abi_id.push("s2200","s30400")

    } else if (c1 === 22 && c2 === 305){
        classTitle = "모험가 (현인/소언사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = partial_adunic_table
        abi_id.push("s2200","s30501")

    } else if (c1 === 22 && c2 === 306){
        classTitle = "모험가 (현인/변신술사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = skinshifter_table
        abi_id.push("s2200","s30600")

    } else if (c1 === 22 && c2 === 307){
        classTitle = "모험가 (현인/결투가)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = duelist_table
        abi_id.push("s2200","s30700")

    } else if (c1 === 22 && c2 === 308){
        classTitle = "모험가 (현인/야수조련사)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = beastmaster_table
        abi_id.push("s2200","s30800")

    } else if (c1 === 22 && c2 === 309){
        classTitle = "모험가 (현인/사제)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = priest_table
        abi_id.push("s2200","s30900")

    } else if (c1 === 22 && c2 === 310){
        classTitle = "모험가 (현인/생각 귀족)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = thought_noble_table
        abi_id.push("s2200","s31000")

    } else if (c1 === 22 && c2 === 311){
        classTitle = "모험가 (현인/저주받은 자)"
        hd_col = expert_hp
        ab_col = to_five_ab
        focus_col = focus_exp
        addit_col1 = wise_table
        addit_col2 = accursed_table
        abi_id.push("s2200","s31100")

    } else if (c1 === 300 && c2 === 300){
        classTitle = "마법사 - 고마법사"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = full_high_mage_table
        abi_id.push("s30000")

    } else if (c1 === 300 && c2 === 301){
        classTitle = "쌍 부분 마법사 (고마법사/원소술사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = dual_mage_table
        addit_col2 = partial_high_mage_art
        addit_col3 = partial_elem_art
        abi_id.push("s30001","s30101")

    } else if (c1 === 300 && c2 === 302){
        classTitle = "쌍 부분 마법사 (고마법사/사령술사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = full_high_mage_table
        addit_col2 = partial_high_mage_art
        addit_col3 = partial_necro_art
        abi_id.push("s30001","s30201")

    } else if (c1 === 300 && c2 === 303){
        classTitle = "모험가 (고마법사/치유사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_high_mage_table
        addit_col2 = healer_table
        abi_id.push("s30001","s30300")

    } else if (c1 === 300 && c2 === 304){
        classTitle = "모험가 (고마법사/구도자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_high_mage_table
        addit_col2 = vowed_table
        abi_id.push("s30001","s30400")

    } else if (c1 === 300 && c2 === 306){
        classTitle = "모험가 (고마법사/변신술사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_high_mage_table
        addit_col2 = skinshifter_table
        abi_id.push("s30001","s30600")

    } else if (c1 === 300 && c2 === 307){
        classTitle = "모험가 (고마법사/결투가)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_high_mage_table
        addit_col2 = duelist_table
        abi_id.push("s30001","s30700")

    } else if (c1 === 300 && c2 === 308){
        classTitle = "모험가 (고마법사/야수조련사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_high_mage_table
        addit_col2 = beastmaster_table
        abi_id.push("s30001","s30800")

    } else if (c1 === 300 && c2 === 309){
        classTitle = "모험가 (고마법사/사제)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_high_mage_table
        addit_col2 = priest_table
        abi_id.push("s30001","s30900")

    } else if (c1 === 300 && c2 === 310){
        classTitle = "모험가 (고마법사/생각 귀족)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_high_mage_table
        addit_col2 = thought_noble_table
        abi_id.push("s30001","s31000")

    } else if (c1 === 300 && c2 === 311){
        classTitle = "모험가 (고마법사/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_high_mage_table
        addit_col2 = accursed_table
        abi_id.push("s30001","s31100")

    } else if (c1 === 301 && c2 === 301){
        classTitle = "마법사 - 원소술사"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = full_elem_table
        abi_id.push("s30100")

    } else if (c1 === 301 && c2 === 302){
        classTitle = "쌍 부분 마법사 (원소술사/사령술사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = dual_mage_table
        addit_col2 = partial_elem_art
        addit_col3 = partial_necro_art
        abi_id.push("s30101","s30201")

    } else if (c1 === 301 && c2 === 303){
        classTitle = "모험가 (원소술사/치유사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_elem_table
        addit_col2 = healer_table
        abi_id.push("s30101","s30300")

    } else if (c1 === 301 && c2 === 304){
        classTitle = "모험가 (원소술사/구도자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_elem_table
        addit_col2 = vowed_table
        abi_id.push("s30101","s30400")

    } else if (c1 === 301 && c2 === 306){
        classTitle = "모험가 (원소술사/변신술사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_elem_table
        addit_col2 = skinshifter_table
        abi_id.push("s30101","s30600")

    } else if (c1 === 301 && c2 === 307){
        classTitle = "모험가 (원소술사/결투가)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_elem_table
        addit_col2 = duelist_table
        abi_id.push("s30101","s30700")

    } else if (c1 === 301 && c2 === 308){
        classTitle = "모험가 (원소술사/야수조련사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_elem_table
        addit_col2 = beastmaster_table
        abi_id.push("s30101","s30800")

    } else if (c1 === 301 && c2 === 309){
        classTitle = "모험가 (원소술사/사제)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_elem_table
        addit_col2 = priest_table
        abi_id.push("s30101","s30900")

    } else if (c1 === 301 && c2 === 310){
        classTitle = "모험가 (원소술사/생각 귀족)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_elem_table
        addit_col2 = thought_noble_table
        abi_id.push("s30101","s31000")

    } else if (c1 === 301 && c2 === 311){
        classTitle = "모험가 (원소술사/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_elem_table
        addit_col2 = accursed_table
        abi_id.push("s30101","s31100")

    } else if (c1 === 302 && c2 === 302) {
        classTitle = "마법사 - 사령술사"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = full_necro_table
        abi_id.push("s30200")

    } else if (c1 === 302 && c2 === 303){
        classTitle = "모험가 (사령술사/치유사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_necro_table
        addit_col2 = healer_table
        abi_id.push("s30201","s30300")

    } else if (c1 === 302 && c2 === 304){
        classTitle = "모험가 (사령술사/구도자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_necro_table
        addit_col2 = vowed_table
        abi_id.push("s30201","s30400")

    } else if (c1 === 302 && c2 === 306){
        classTitle = "모험가 (사령술사/변신술사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_necro_table
        addit_col2 = skinshifter_table
        abi_id.push("s30201","s30600")

    } else if (c1 === 302 && c2 === 307){
        classTitle = "모험가 (사령술사/결투가)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_necro_table
        addit_col2 = duelist_table
        abi_id.push("s30201","s30700")

    } else if (c1 === 302 && c2 === 308){
        classTitle = "모험가 (사령술사/야수조련사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_necro_table
        addit_col2 = beastmaster_table
        abi_id.push("s30201","s30800")

    } else if (c1 === 302 && c2 === 309){
        classTitle = "모험가 (사령술사/사제)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_necro_table
        addit_col2 = priest_table
        abi_id.push("s30201","s30900")

    } else if (c1 === 302 && c2 === 310){
        classTitle = "모험가 (사령술사/생각 귀족)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_necro_table
        addit_col2 = thought_noble_table
        abi_id.push("s30201","s31000")

    } else if (c1 === 302 && c2 === 311){
        classTitle = "모험가 (사령술사/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_necro_table
        addit_col2 = accursed_table
        abi_id.push("s30201","s31100")
        
    } else if (c1 === 303 && c2 === 304){
        classTitle = "모험가 (치유사/구도자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = healer_table
        addit_col2 = vowed_table
        abi_id.push("s30300","s30400")

    } else if (c1 === 303 && c2 === 305){
        classTitle = "모험가 (치유사/소언사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = healer_table
        addit_col2 = partial_adunic_table
        abi_id.push("s30300","s30501")

    } else if (c1 === 303 && c2 === 306){
        classTitle = "모험가 (치유사/변신술사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = healer_table
        addit_col2 = skinshifter_table
        abi_id.push("s30300","s30600")

    } else if (c1 === 303 && c2 === 307){
        classTitle = "모험가 (치유사/결투가)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = healer_table
        addit_col2 = duelist_table
        abi_id.push("s30300","s30700")

    } else if (c1 === 303 && c2 === 308){
        classTitle = "모험가 (치유사/야수조련사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = healer_table
        addit_col2 = beastmaster_table
        abi_id.push("s30300","s30800")

    } else if (c1 === 303 && c2 === 309){
        classTitle = "모험가 (치유사/사제)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = healer_table
        addit_col2 = priest_table
        abi_id.push("s30300","s30900")

    } else if (c1 === 303 && c2 === 310){
        classTitle = "모험가 (치유사/생각 귀족)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = healer_table
        addit_col2 = thought_noble_table
        abi_id.push("s30300","s31000")

    } else if (c1 === 303 && c2 === 311){
        classTitle = "모험가 (치유사/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = healer_table
        addit_col2 = accursed_table
        abi_id.push("s30300","s31100")
        
    } else if (c1 === 304 && c2 === 305){
        classTitle = "모험가 (구도자/소언사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = vowed_table
        addit_col2 = partial_adunic_table
        abi_id.push("s30400","s30501")

    } else if (c1 === 304 && c2 === 306){
        classTitle = "모험가 (구도자/변신술사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = vowed_table
        addit_col2 = skinshifter_table
        abi_id.push("s30400","s30600")

    } else if (c1 === 304 && c2 === 307){
        classTitle = "모험가 (구도자/결투가)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = vowed_table
        addit_col2 = duelist_table
        abi_id.push("s30400","s30700")

    } else if (c1 === 304 && c2 === 308){
        classTitle = "모험가 (구도자/야수조련사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = vowed_table
        addit_col2 = beastmaster_table

    } else if (c1 === 304 && c2 === 309){
        classTitle = "모험가 (구도자/사제)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = vowed_table
        addit_col2 = priest_table
        abi_id.push("s30400","s30900")

    } else if (c1 === 304 && c2 === 310){
        classTitle = "모험가 (구도자/생각 귀족)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = vowed_table
        addit_col2 = thought_noble_table
        abi_id.push("s30400","s31000")

    } else if (c1 === 304 && c2 === 311){
        classTitle = "모험가 (구도자/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = vowed_table
        addit_col2 = accursed_table
        abi_id.push("s30400","s31100")

    } else if (c1 === 305 && c2 === 305) {
        classTitle = "마법사 - 소언사"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = full_adunic_table
        abi_id.push("s30500")

    } else if (c1 === 305 && c2 === 306){
        classTitle = "모험가 (소언사/변신술사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_adunic_table
        addit_col2 = skinshifter_table
        abi_id.push("s30501", "s30600")

    } else if (c1 === 305 && c2 === 307){
        classTitle = "모험가 (소언사/결투가)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_adunic_table
        addit_col2 = duelist_table
        abi_id.push("s30501", "s30700")

    } else if (c1 === 305 && c2 === 308){
        classTitle = "모험가 (소언사/야수조련사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_adunic_table
        addit_col2 = beastmaster_table
        abi_id.push("s30501", "s30800")

    } else if (c1 === 305 && c2 === 309){
        classTitle = "모험가 (소언사/사제)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_adunic_table
        addit_col2 = priest_table
        abi_id.push("s30501", "s30900")

    } else if (c1 === 305 && c2 === 310){
        classTitle = "모험가 (소언사/생각 귀족)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_adunic_table
        addit_col2 = thought_noble_table
        abi_id.push("s30501", "s31000")

    } else if (c1 === 305 && c2 === 311){
        classTitle = "모험가 (소언사/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = partial_adunic_table
        addit_col2 = accursed_table
        abi_id.push("s30501", "s31100")

    } else if (c1 === 306 && c2 === 307){
        classTitle = "모험가 (변신술사/결투가)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = skinshifter_table
        addit_col2 = duelist_table
        abi_id.push("s30600", "s30700")

    } else if (c1 === 306 && c2 === 308){
        classTitle = "모험가 (변신술사/야수조련사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = skinshifter_table
        addit_col2 = beastmaster_table
        abi_id.push("s30600", "s30800")

    } else if (c1 === 306 && c2 === 309){
        classTitle = "모험가 (변신술사/사제)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = skinshifter_table
        addit_col2 = priest_table
        abi_id.push("s30600", "s30900")

    } else if (c1 === 306 && c2 === 310){
        classTitle = "모험가 (변신술사/생각 귀족)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = skinshifter_table
        addit_col2 = thought_noble_table
        abi_id.push("s30600", "s31000")

    } else if (c1 === 306 && c2 === 311) {
        classTitle = "모험가 (변신술사/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = skinshifter_table
        addit_col2 = accursed_table
        abi_id.push("s30600", "s31100")
        
    } else if (c1 === 307 && c2 === 308){
        classTitle = "모험가 (결투가/야수조련사)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = duelist_table
        addit_col2 = beastmaster_table
        abi_id.push("s30700", "s30800")

    } else if (c1 === 307 && c2 === 309){
        classTitle = "모험가 (결투가/사제)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = duelist_table
        addit_col2 = priest_table
        abi_id.push("s30700", "s30900")

    } else if (c1 === 307 && c2 === 310){
        classTitle = "모험가 (결투가/생각 귀족)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = duelist_table
        addit_col2 = thought_noble_table
        abi_id.push("s30700", "s31000")

    } else if (c1 === 307 && c2 === 311) {
        classTitle = "모험가 (결투가/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = duelist_table
        addit_col2 = accursed_table
        abi_id.push("s30700", "s31100")
        
    } else if (c1 === 308 && c2 === 309){
        classTitle = "모험가 (야수조련사/사제)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = beastmaster_table
        addit_col2 = priest_table
        abi_id.push("s30800", "s30900")

    } else if (c1 === 308 && c2 === 310){
        classTitle = "모험가 (야수조련사/생각 귀족)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = beastmaster_table
        addit_col2 = thought_noble_table
        abi_id.push("s30800", "s31000")

    } else if (c1 === 308 && c2 === 311) {
        classTitle = "모험가 (야수조련사/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = beastmaster_table
        addit_col2 = accursed_table
        abi_id.push("s30800", "s31100")
        
    } else if (c1 === 309 && c2 === 310){
        classTitle = "모험가 (사제/생각 귀족)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = priest_table
        addit_col2 = thought_noble_table
        abi_id.push("s30900", "s31000")

    } else if (c1 === 309 && c2 === 311) {
        classTitle = "모험가 (사제/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = priest_table
        addit_col2 = accursed_table
        abi_id.push("s30900", "s31100")
        
    } else if (c1 === 310 && c2 === 311) {
        classTitle = "모험가 (생각 귀족/저주받은 자)"
        hd_col = mage_hp
        ab_col = to_two_ab
        focus_col = focus_mage
        addit_col1 = thought_noble_table
        addit_col2 = accursed_table
        abi_id.push("s31000", "s31100")
    }


    $('table').remove()
    let ct = genClassTable(classTitle, hd_col, ab_col, focus_col, addit_col1, addit_col2, addit_col3, addit_col4)
    $('#ct').append(ct)

    $('#cc').remove()
    let class_card = genClassAbilities(abi_id)
    $("#class_card").append(class_card)

}

function genClassAbilities(ids){

    let wrapper = $('<ul class="card-wrapper" id="cc"></ul>');

    ids.forEach(function(id, index){

        let block = $('<li class="card"></li>');

        if (id === "s1000"){
            block.append($('<h3>클래스 능력: 치명적 일격</h3>'));
            block.append($('<h4>Class Ability: Killing Blow</h4>'));
            block.append($('<p>전사가 공격, 주문, 또는 특별한 능력으로 피해를 입혔을 때, ' +
                '피해에 캐릭터 레벨의 반을 더합니다(소수점 아래 올림).' +
                '이 피해는 충격 피해에도 추가됩니다. 충격 피해를 강화하는 여러 포커스와 조합된다면,' +
                '숙련된 전사는 공격 굴림의 결과와 상관없이 평범한 병사 여럿을 순식간에 처리할 수 있습니다.</p>'));

        } else if (id === "s1001"){
            block.append($('<h3>클래스 능력: 베테랑의 행운</h3>'));
            block.append($('<h4>Class Ability: Veteran\'s Luck</h4>'));
            block.append($('<p>장면마다 한 번, 전사는 즉시 행동을 사용해 빗나간 공격을 맞춘 것으로 간주할 수 있습니다. ' +
                '또는 스스로를 향한 공격이 성공했을 때 빗나간 것으로 간주할 수도 있습니다.' +
                '이 능력은 환경으로 인한 피해 또는 자신이 타고 있는 동물이나 ' +
                '이동 수단을 향한 피해를 없앨 수는 없습니다.</p>'));

        } else if (id === "s1100") {
            block.append($('<h3>항마사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Mageslayer</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•마법 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•항마사 기교</b></p></li>'));

        } else if (id === "s2000"){
            block.append($('<h3>클래스 능력: 전문화</h3>'));
            block.append($('<h4>Class Ability: Masterful Expertise</h4>'));
            block.append($('<p>장면마다 한 번, 전문가는 즉시 행동을 사용해 비전투 기술 판정을 다시 굴릴 수 있습니다.</p>'));

        } else if (id === "s2001"){
            block.append($('<h3>클래스 능력: 빠른 학습자</h3>'));
            block.append($('<h4>Class Ability: Quick Learner</h4>'));
            block.append($('<p> 캐릭터의 레벨이 올라갔을 때, 비전투 기술을 향상하는 데 사용할 수 있는 기술 점수 하나를 추가로 받습니다.' +
                ' 이때 받은 점수는 나중을 위해 저장할 수 있습니다.</p>'));

        } else if (id === "s2100"){
            block.append($('<h3>음유시인 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Bard</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•공연 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•바드 기교</b></p></li>'));

        } else if (id === "s2200"){
            block.append($('<h3>현인 시작 혜택</h3>'));
            block.append($('<h4>Benefits of the Wise</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•캐릭터 컨셉에 알맞은 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•현인 기교</b></p></li>'));

        } else if (id === "s30000") {
            block.append($('<h3>고마법사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of High Mage</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•마법 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•시작 주문 수:</b> 4</p></li>'));
            block.append($('<li><p><b>•주문 목록:</b> 고마법</p></li>'));
            block.append($('<li><p><b>•고마법사 기교</b></p></li>'));

        } else if (id === "s30001") {
            block.append($('<h3>고마법사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of High Mage</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•마법 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•시작 주문 수:</b> 2</p></li>'));
            block.append($('<li><p><b>•주문 목록:</b> 고마법</p></li>'));
            block.append($('<li><p><b>•고마법사 기교</b></p></li>'));

        } else if (id === "s30100") {
            block.append($('<h3>원소술사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Elementalist</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•마법 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•시작 주문 수:</b> 4</p></li>'));
            block.append($('<li><p><b>•주문 목록: </b>고마법, 원소마법</p></li>'));
            block.append($('<li><p><b>•원소술사 기교</b></p></li>'));

        } else if (id === "s30101") {
            block.append($('<h3>원소술사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Elementalist</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•마법 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•시작 주문 수:</b> 2</p></li>'));
            block.append($('<li><p><b>•주문 목록: </b>고마법, 원소마법</p></li>'));
            block.append($('<li><p><b>•원소술사 기교</b></p></li>'));

        } else if (id === "s30200") {
            block.append($('<h3>사령술사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Necromancer</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•마법 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•시작 주문 수:</b> 4</p></li>'));
            block.append($('<li><p><b>•주문 목록: </b>고마법, 사령마법</p></li>'));
            block.append($('<li><p><b>•사령술사 기교</b></p></li>'));

        } else if (id === "s30201") {
            block.append($('<h3>사령술사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Necromancer</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•마법 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•시작 주문 수:</b> 2</p></li>'));
            block.append($('<li><p><b>•주문 목록: </b>고마법, 사령마법</p></li>'));
            block.append($('<li><p><b>•사령술사 기교</b></p></li>'));

        } else if (id === "s30300") {
            block.append($('<h3>치유사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Healer</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•치료 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•치유사 기교</b></p></li>'));

        } else if (id === "s30400") {
            block.append($('<h3>구도자 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Vowed</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•구도자의 종파에 따른 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•구도자 기교</b></p></li>'));

        } else if (id === "s30500") {
            block.append($('<h3>소언사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Invoker</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•마법 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•시작 주문 수:</b> 4</p></li>'));
            block.append($('<li><p><b>•주문 목록:</b> 고마법</p></li>'));

        } else if (id === "s30501") {
            block.append($('<h3>소언사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Invoker</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•마법 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•시작 주문 수:</b> 2</p></li>'));
            block.append($('<li><p><b>•주문 목록:</b> 고마법</p></li>'));

        } else if (id === "s30600") {
            block.append($('<h3>변신술사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Skinshifter</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•생존 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•변신술사 기교</b></p></li>'));

        } else if (id === "s30700") {
            block.append($('<h3>결투가 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Duelist</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•접전 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•결투가 기교</b></p></li>'));

        } else if (id === "s30701") {
            block.append($('<h3>허약함의 단점</h3>'));
            block.append($('<h4>Flaw of Fragility</h4>'));
            block.append($('<p>결투가의 규율은 훌륭한 일대일 전투원을 만들지만 일반적인 전사 동료들에 비해 순수 ' +
                '육체적 훈련에 있어서 훨씬 더 적은 시간을 사용하게 됩니다. 이들이 사용하는 기법은 빠르고 치명적이지만, ' +
                '일반적인 훈련으로 얻어지는 고통을 인내하는 방법을 배우지는 않습니다. 이렇기 때문에 부분 전사/부분 결투가는 ' +
                '부분 전사의 1d6+2 이 아닌 1d6을 HD로 사용합니다. ' +
                '다른 부분 클래스 조합은 이 단점으로 인해 특별한 영향을 받지 않습니다.</p>'));

        } else if (id === "s30800") {
            block.append($('<h3>야수조련사 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Beastmaster</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•생존 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•야수조련사 기교</b></p></li>'));

        } else if (id === "s30900") {
            block.append($('<h3>사제 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Priest</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•기도 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•사제 기교</b></p></li>'));

        } else if (id === "s31000") {
            block.append($('<h3>생각 귀족 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Thought Noble</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•감지 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•생각 귀족 기교</b></p></li>'));

        } else if (id === "s31100") {
            block.append($('<h3>저주받은 자 시작 혜택</h3>'));
            block.append($('<h4>Benefits of Accursed</h4>'))
            block.append($('<ul></ul>'));
            block.append($('<li><p><b>•마법 기술</b> +1</p></li>'));
            block.append($('<li><p><b>•저주받은 자 기교</b></p></li>'));
        }

        wrapper.append(block)

    });


    return wrapper

}

function blockClassChoice(id, to_block_select){

    $( to_block_select).children().removeAttr('disabled');
    $(to_block_select + " option[value='0']").attr('disabled', 'disabled')

    /*
        <option value="10">전사</option>
        <option value="11">전사 - 항마사</option>
        <option value="20">전문가</option>
        <option value="21">전문가 - 음유시인</option>
        <option value="22">전문가 - 현인</option>
        <option value="300">마법사 - 고마법사</option>
        <option value="301">마법사 - 원소술사</option>
        <option value="302">마법사 - 사령술사</option>
        <option value="303">마법사 - 치유사</option>
        <option value="304">마법사 - 구도자</option>
        <option value="305">마법사 - 소언사</option>
        <option value="306">마법사 - 변신술사</option>
        <option value="307">마법사 - 결투가</option>
        <option value="308">마법사 - 야수조련사</option>
        <option value="309">마법사 - 사제</option>
        <option value="310">마법사 - 생각 귀족</option>
        <option value="311">마법사 - 저주받은 자</option>
     */

    if(id === "11") {
        $(to_block_select + " option[value='11']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='300']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='301']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='302']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='303']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='304']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='305']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='306']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='307']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='308']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='309']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='310']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='311']").attr('disabled', 'disabled');

    } else if(id === "21"){
        $( to_block_select + " option[value='21']").attr('disabled','disabled');

    } else if(id === "22"){
        $( to_block_select + " option[value='22']").attr('disabled','disabled');

    } else if (id === "300"){
        $( to_block_select + " option[value='11']").attr('disabled','disabled');
        $( to_block_select + " option[value='305']").attr('disabled','disabled');

    } else if (id === "301"){
        $( to_block_select + " option[value='11']").attr('disabled','disabled');
        $( to_block_select + " option[value='305']").attr('disabled','disabled');

    } else if (id === "302"){
        $( to_block_select + " option[value='11']").attr('disabled','disabled');
        $( to_block_select + " option[value='305']").attr('disabled','disabled');

    } else if (id === "303"){
        $( to_block_select + " option[value='11']").attr('disabled','disabled');
        $( to_block_select + " option[value='303']").attr('disabled','disabled');

    } else if (id === "304"){
        $( to_block_select + " option[value='11']").attr('disabled','disabled');
        $( to_block_select + " option[value='304']").attr('disabled','disabled');

    } else if (id === "305"){
        $( to_block_select + " option[value='11']").attr('disabled','disabled');
        $( to_block_select + " option[value='300']").attr('disabled','disabled');
        $( to_block_select + " option[value='301']").attr('disabled','disabled');
        $( to_block_select + " option[value='302']").attr('disabled','disabled');

    } else if (id === "306") {
        $(to_block_select + " option[value='11']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='306']").attr('disabled', 'disabled');

    } else if (id === "307") {
        $(to_block_select + " option[value='11']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='307']").attr('disabled', 'disabled');

    } else if (id === "308") {
        $(to_block_select + " option[value='11']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='308']").attr('disabled', 'disabled');

    } else if (id === "309") {
        $(to_block_select + " option[value='11']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='309']").attr('disabled', 'disabled');

    } else if (id === "310") {
        $(to_block_select + " option[value='11']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='310']").attr('disabled', 'disabled');

    } else if (id === "311") {
        $(to_block_select + " option[value='11']").attr('disabled', 'disabled');
        $(to_block_select + " option[value='311']").attr('disabled', 'disabled');

    }
}

function genClassTable(class_title, hit_dice, ab, focus, addit_col1, addit_col2, addit_col3, addit_col4){
    let table = $('<table>');
    table.append($('<caption></caption>').text(class_title))

    let table_head = $('<thead></thead>')
    table_head.append("<tr></tr>")
    table_head.append($('<th>' + levels[0] + '</th>').addClass('stat'))
    table_head.append($('<th>' + hit_dice[0] + '</th>').addClass('stat'))
    table_head.append($('<th>' + ab[0] + '</th>').addClass('stat'))
    table_head.append($('<th>' + focus[0] + '</th>').addClass('stat'))

    if (addit_col1){
        addit_col1[0].forEach(function(item, index){
            table_head.append($('<th>' + item + '</th>').addClass('stat'))
        });
    }

    if (addit_col2){
        addit_col2[0].forEach(function(item, index){
            table_head.append($('<th>' + item + '</th>').addClass('stat'))
        });
    }

    if (addit_col3){
        addit_col3[0].forEach(function(item, index){
            table_head.append($('<th>' + item + '</th>').addClass('stat'))
        });
    }

    if (addit_col4){
        addit_col4[0].forEach(function(item, index){
            table_head.append($('<th>' + item + '</th>').addClass('stat'))
        });
    }


    table.append(table_head)

    for(i=1; i<11; i++){
        var row = $('<tr>')
        row.append($('<td>').text(levels[i]).addClass('stat'));
        row.append($('<td>').text(hit_dice[i]).addClass('stat'));
        row.append($('<td>').text(ab[i]).addClass('stat'));
        row.append($('<td>').text(focus[i]).addClass('stat'));

        if (addit_col1) {
            addit_col1[i].forEach(function (item, index) {
                row.append($('<td>' + item + '</td>').addClass('stat'))
            });
        }

        if (addit_col2) {
            addit_col2[i].forEach(function (item, index) {
                row.append($('<td>' + item + '</td>').addClass('stat'))
            });
        }

        if (addit_col3) {
            addit_col3[i].forEach(function (item, index) {
                row.append($('<td>' + item + '</td>').addClass('stat'))
            });
        }

        if (addit_col4) {
            addit_col4[i].forEach(function (item, index) {
                row.append($('<td>' + item + '</td>').addClass('stat'))
            });
        }

        table.append(row);
    }
    return table

}

let levels = ["레벨","1","2","3","4","5","6","7","8","9","10"]

let warrior_hp = ["히트 다이스","1d6+2","2d6+4","3d6+6","4d6+8","5d6+10","6d6+12","7d6+14","8d6+16","9d6+18","10d6+20"]
let expert_hp = ["히트 다이스","1d6","2d6","3d6","4d6","5d6","6d6","7d6","8d6","9d6","10d6"]
let mage_hp = ["히트 다이스","1d6-1","2d6-2","3d6-3","4d6-4","5d6-5","6d6-6","7d6-7","8d6-8","9d6-9","10d6-10"]

let to_ten_ab = ["공격 보너스","+1","+2","+3","+4","+5","+6","+7","+8","+9","+10"]
let to_seven_ab = ["공격 보너스","+1","+2","+2","+3","+4","+5","+5","+6","+6","+7"]
let to_five_ab = ["공격 보너스","+0","+1","+1","+2","+2","+3","+3","+4","+4","+5"]
let to_two_ab =["공격 보너스","+0","+0","+0","+0","+1","+1","+1","+1","+1","+2"]

let focus_war = ["포커스 선택","전사 1, 자유 1","자유 1", "-", "-", "자유 1", "-", "자유 1", "-", "-", "자유 1"]
let focus_mage = ["포커스 선택","자유 1","자유 1", "-", "-", "자유 1", "-", "자유 1", "-", "-", "자유 1"]
let focus_exp = ["포커스 선택","전문가 1, 자유 1","자유 1", "-", "-", "자유 1", "-", "자유 1", "-", "-", "자유 1"]
let focus_war_exp = ["포커스 선택","전사 1, 전문가 1, 자유 1","자유 1", "-", "-", "자유 1", "-", "자유 1", "-", "-", "자유 1"]


let full_high_mage_table = [['고마법사 기교','최대 주문 레벨','하루 주문 시전 횟수','하루 주문 준비 수'],
    ['자유 2', '1', '1', '3'], ['자유 1', '1','1','3'], ['-','2','2','4'],
    ['자유 1', '2', '2', '5' ], ['-', '3', '3', '6'], ['자유 1', '3', '3', '7'],
    ['-', '4', '4', '8'], ['자유 1', '4', '4', '9'], ['-', '5','5','10'],
    ['자유 1', '5', '6', '12']]

let partial_high_mage_table = [['고마법사 기교','최대 주문 레벨','하루 주문 시전 횟수','하루 주문 준비 수'],
    ['자유 1', '1', '1', '2'], ['자유 1', '1','1','3'], ['자유 1','1','1','3'],
    ['-', '1', '2', '4' ], ['-', '2', '2', '5'], ['자유 1', '2', '3', '6'],
    ['-', '2', '3', '7'], ['-', '2', '3', '7'], ['자유 1', '3','4','8'],
    ['-', '3', '4', '9']]

let full_elem_table = [['원소술사 기교','최대 주문 레벨','하루 주문 시전 횟수','하루 주문 준비 수'],
    ['<i>원소 촉발</i>, <i>원소 내성</i>, 자유 1', '1', '1', '3'], ['자유 1', '1','1','3'],
    ['-','2','2','4'],
    ['자유 1', '2', '2', '5' ], ['-', '3', '3', '6'], ['자유 1', '3', '3', '7'],
    ['-', '4', '4', '8'], ['자유 1', '4', '4', '9'], ['-', '5','5','10'],
    ['자유 1', '5', '6', '12']]

let partial_elem_art = [['원소술사 기교'], ['<i>원소 촉발</i>, <i>원소 내성</i>, 자유 1'], ['자유 1'],
                        ['-'], ['자유 1'], ['-'], ['자유 1'], ['-'], ['자유 1'], ['-'], ['자유 1']]

let partial_necro_art =  [['사령술사 기교'], ['자유 1'], ['-'], ['자유 1'], ['-'], ['-'], ['자유 1'],
                             ['-'], ['-'], ['자유 1'], ['-']]

let partial_high_mage_art = [['고마법사 기교'], ['자유 1'], ['자유 1'], ['자유 1'],
                                ['-'], ['-'], ['자유 1'], ['-'], ['-'], ['자유 1'], ['-']]


let partial_elem_table = [['원소술사 기교','최대 주문 레벨','하루 주문 시전 횟수','하루 주문 준비 수'],
    ['<i>원소 촉발</i>, <i>원소 내성</i>, 자유 1', '1', '1', '2'], ['-', '1','1','3'],
    ['자유 1','1','1','3'], ['-', '1', '2', '4' ], ['-', '2', '2', '5'], ['자유 1', '2', '3', '6'],
    ['-', '2', '3', '7'], ['-', '2', '3', '7'], ['자유 1', '3','4','8'], ['-', '3', '4', '9']]

let full_necro_table = [['사령술사 기교','최대 주문 레벨','하루 주문 시전 횟수','하루 주문 준비 수'],
    ['자유 1', '1', '1', '3'], ['자유 1', '1','1','3'],
    ['-','2','2','4'],
    ['자유 1', '2', '2', '5' ], ['-', '3', '3', '6'], ['자유 1', '3', '3', '7'],
    ['-', '4', '4', '8'], ['자유 1', '4', '4', '9'], ['-', '5','5','10'],
    ['자유 1', '5', '6', '12']]

let partial_necro_table = [['사령술사 기교','최대 주문 레벨','하루 주문 시전 횟수','하루 주문 준비 수'],
    ['자유 1', '1', '1', '2'], ['-', '1','1','3'],
    ['자유 1','1','1','3'], ['-', '1', '2', '4' ], ['-', '2', '2', '5'], ['자유 1', '2', '3', '6'],
    ['-', '2', '3', '7'], ['-', '2', '3', '7'], ['자유 1', '3','4','8'], ['-', '3', '4', '9']]

let healer_table = [['치유사 기교'], ['<i>치유의 손길</i>, 자유 1'], ['자유 1'], ['-'], ['자유 1'], ['자유 1'],
    ['자유 1'], ['-'], ['자유 1'], ['-'], ['자유 1']]

let vowed_table = [['격투 명중 보너스','격투 피해','격투 충격','구도자 기교'],
                    ['+0', '1d6', '1/15', '<i>무예</i>,<i>비무장 무력</i>,<i>맨몸 방어술</i>, 자유 1'],
                    ['+1', '1d6','2/15','자유 1'], ['+1','1d8','2/15','-'], ['+2', '1d8', '2/15', '자유 1' ],
                    ['+2', '1d10', '2/15', '자유 1'], ['+3', '1d10', '3/15', '자유 1'], ['+3', '1d10+1', '3/15', '-'],
                    ['+4', '1d10+1', '3/15', '자유 1'], ['+4', '1d10+2','4/15','-'], ['+5', '1d10+3', '4/15', '자유 1']]

let full_adunic_table = [['최대 주문 레벨','주문 점수','준비된 주문 수'],
                            ['1', '1 + 지식 수정치', '2 + 지식 수정치'], ['1','3 + 지식 수정치','3 + 지식 수정치'],
                            ['2','4 + 지식 수정치','4 + 지식 수정치'], ['2', '5 + 지식 수정치', '4 + 지식 수정치' ],
                            ['3', '6 + 지식 수정치', '5 + 지식 수정치'], ['3', '7 + 지식 수정치', '6 + 지식 수정치'],
                            ['4', '8 + 지식 수정치', '7 + 지식 수정치'], ['4', '9 + 지식 수정치', '7 + 지식 수정치'],
                            ['5', '10 + 지식 수정치','8 + 지식 수정치'], ['5', '11 + 지식 수정치', '9 + 지식 수정치']]

let partial_adunic_table = [['최대 주문 레벨','주문 점수','준비된 주문 수'],
                            ['1', '1 + 지식 수정치', '1 + 지식 수정치'], ['1','1 + 지식 수정치','3 + 지식 수정치'],
                            ['1','2 + 지식 수정치','3 + 지식 수정치'], ['1', '2 + 지식 수정치', '4 + 지식 수정치' ],
                            ['2', '3 + 지식 수정치', '4 + 지식 수정치'], ['2', '3 + 지식 수정치', '5 + 지식 수정치'],
                            ['2', '4 + 지식 수정치', '5 + 지식 수정치'], ['2', '4 + 지식 수정치', '6 + 지식 수정치'],
                            ['3', '5 + 지식 수정치','6 + 지식 수정치'], ['3', '6 + 지식 수정치', '7 + 지식 수정치']]

let skinshifter_table = [['형상 보너스','변신술사 기교'], ['+1','<i>형상 변화</i>, 자유 1'], ['+1','자유 1'], ['+2', '-'],
                        ['+2', '자유 1'], ['+3', '자유 1'], ['+3', '자유 1'], ['+4', '-'], ['+4', '자유 1'],
                        ['+5', '-'], ['+6', '자유 1']]

let duelist_table = [['선호 무기 보너스','결투가 기교'], ['+1','<i>선호 무기</i>, 자유 1'], ['+1','자유 1'], ['+2', '-'],
                    ['+2', '자유 1'], ['+3', '자유 1'], ['+3', '자유 1'], ['+4', '-'], ['+4', '자유 1'],
                    ['+5', '-'], ['+5', '자유 1']]

let beastmaster_table = [['야수조련사 기교'], ['<i>동료 결속</i>, 자유 1'], ['자유 1'], ['-'], ['자유 1'], ['자유 1'],
                    ['자유 1'], ['-'], ['자유 1'], ['-'], ['자유 1']]

let priest_table = [['사제 기교'], ['자유 2'], ['자유 1'], ['-'], ['자유 1'], ['자유 1'],
    ['자유 1'], ['-'], ['자유 1'], ['-'], ['자유 1']]

let thought_noble_table = [['생각 귀족 기교'], ['<i>정신 열람</i>, 자유 1'], ['자유 1'], ['자유 1'], ['자유 1'], ['자유 1'],
    ['자유 1'], ['자유 1'], ['자유 1'], ['자유 1'], ['자유 1']]


let dual_mage_table = [['최대 주문 레벨','하루 주문 시전 횟수','하루 주문 준비 수'],
                    ['1', '1', '3'], ['1','1','4'], ['1','2','5'],
                    ['2', '2', '6' ], ['2', '2', '8'], ['2', '3', '9'],
                    ['3', '3', '10'], ['3', '4', '12'], ['3','4','13'],
                    ['4', '5', '15']]

let mageslayer_table = [['항마사 기교'], ['<i>항마도</i>, <i>마법살</i>'], ['<i>마녀탐색자</i>,<i>주문방패</i>'],
    ['<i>주문 방해</i>'], ['<i>사냥감을 알라</i>'], ['<i>고통을 공유해라</i>'], ['<i>마법 일소</i>'],
    ['<i>아군 방호</i>'], ['<i>흠없는 육체</i>'], ['<i>흠없는 정신</i>'], ['<i>절대적 무효화</i>']]

let accursed_table = [['저주받은 자 기교'], ['<i>저주받은 화살</i> 혹은 <i>저주받은 검</i>, 자유 1'],
    ['자유 1'], ['-'], ['자유 1'], ['자유 1'], ['자유 1'], ['-'], ['자유 1'], ['-'], ['자유 1']]

let bard_table = [['바드 기교'], ['<i>천 개의 혓바닥</i>, 자유 1'], ['자유 1'], ['-'], ['자유 1'], ['-'],
    ['자유 1'], ['-'], ['자유 1'], ['-'], ['자유 1']]

let wise_table = [['비마법적 사제','마녀','예언자','기인'],
    ['<i>신성한 존엄성</i>','<i>공포와 경외</i>','<i>학식</i> 혹은 <i>민중의 친구</i>', '자유 1'],
    ['<i>공포와 경외</i> 혹은 <i>민중의 친구</i>','<i>저주와 축복</i> 중 1','<i>예지 기교</i> 중 1','-'],
    ['-','-','-','자유 1'],
    ['<i>숙련된</i> 혹은 <i>학식</i>','<i>치유사</i> 혹은 <i>저주와 축복</i> 중 1','<i>예지 기교</i> 중 1','-'],
    ['<i>개인적 비처벌성</i>','<i>예지 기교</i> 중 1','<i>예지 기교</i> 중 1','자유 1'],
    ['<i>연줄</i> 혹은 <i>민중의 친구</i>','<i>숙련된</i>', '<i>숙련된</i> 혹은 <i>연줄</i>', '-'],
    ['-','-','-','자유 1'],
    ['<i>일반 기교</i> 중 1', '<i>예지 기교</i>와 <i>저주와 축복</i> 중 1', '<i>숙련된</i> 혹은 <i>연줄</i>','-'],
    ['-','-','-','자유 1'],
    ['<i>일반 기교</i> 중 1','<i>저주와 축복</i> 중 1','<i>예지 기교</i> 중 1','-']]

