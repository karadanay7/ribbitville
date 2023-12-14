<template>
  <div class="bg-pink-100 min-h-screen pt-16 font-main">
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-12 px-10 pt-16"
    >
      <div
        v-for="frog in frogs"
        :key="frog.id"
        class="border-2 border-green-500 rounded-xl h-full bg-white p-4 flex flex-col"
      >
        <h1 class="text-center text-4xl font-sans text-green-800">
          {{ frog.title }}
        </h1>
        <div class="flex justify-center items-center pt-4">
          <img
            :src="frog.image"
            :alt="frog.title"
            class="h-44 w-44 object-cover rounded-xl border-2 border-green-600 p-1 justify-start"
          />
        </div>

        <p class="pt-4">{{ frog.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const frogs = ref([
  {
    id: 1,
    title: "Gamamaru",
    image:
      "	https://qph.cf2.quoracdn.net/main-qimg-f8236d525674b3047bd12ed8eef7e7be-lq",
    description:
      "Gamamaru, also known as the Great Toad Sage, is a prominent character in the Naruto series. As the oldest and most respected toad on Mount Myōboku, Gamamaru is known for his wisdom and highly accurate prophecies. He played a significant role in the history of the Naruto world, having witnessed Kaguya Ōtsutsuki's actions over a thousand years ago.Gamamaru taught Hagoromo and Hamura Ōtsutsuki senjutsu to help them confront Kaguya. He also gave Hagoromo a prophecy about a mischievous blue-eyed boy who would unite the tailed beasts and change the world. Centuries later, Gamamaru made prophecies about Jiraiya and Naruto, foreseeing their roles in shaping the destiny of the ninja world.Despite his age, Gamamaru is portrayed as constantly smiling and wise. He has the ability to use senjutsu, ninjutsu (including Water Release), and divination. He is respected by other toads and has a significant role in various events throughout the Naruto series, including Pain's Assault and the Fourth Shinobi World War.Gamamaru's character also appears in the Naruto movies, such as Road to Ninja: Naruto the Movie. ",
  },
  {
    id: 2,
    title: "Eruka Frog",
    image:
      "	https://pm1.aminoapps.com/6352/dbe79569f37becd3dcfaef5db3f709de073d08cd_hq.jpg",
    description:
      "Eruka Frog is a minor antagonist in the Soul Eater series. A witch with amphibian magic, she initially serves under the command of Medusa Gorgon. Despite her cowardly nature, Eruka takes pride in her witch heritage and opposes changes that threaten witches. She confronts Medusa with a plan to eliminate her, but the plot backfires when Medusa implants snakes into Eruka and her companion Mizune.Forced into servitude, Eruka must complete tasks for Medusa, including aiding in the resurrection of the Kishin Asura. She forms a partnership with the immortal werewolf Free, undertaking missions to further Medusa's plans. Eruka is caught between the choices of carrying out dangerous tasks or facing the consequences of Medusa's implanted snakes.Despite initially celebrating Medusa's apparent demise, Eruka later learns of Medusa's survival and becomes a reluctant spy within Arachnophobia, Medusa's sister Arachne's organization. Captured by Black Star, Eruka is eventually released to assist Death the Kid in negotiations with the Grand Witch.  ",
  },
  {
    id: 3,
    title: "Aogaeru",
    image:
      "	data:image/jpeg;base64,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",
    description:
      "Aogaeru, the small yet pivotal frog spirit in Hayao Miyazaki's Spirited Away, enriches the film's enchanting narrative with his diminutive charm and profound role in the spirit world's bathhouse. Recognizing Chihiro's humanity, Aogaeru becomes a linchpin in her journey, his awareness temporarily hindered by Haku's intervention. The whimsical frog spirit takes an unexpected turn as one of the Adapted spirits during No Face's chaotic episode, injecting suspense into his character arc. Chihiro's compassionate intervention eventually brings release to Aogaeru, aligning with the film's transformative theme. Aogaeru's brief but impactful presence adds depth to the diverse array of magical creatures, ensuring audiences of all ages are immersed in Miyazaki's spellbinding world, where wonder and enchantment intertwine seamlessly with moments of suspense and transformation.",
  },
  {
    id: 4,
    title: "Gamakichi",
    image:
      "	https://i.pinimg.com/736x/f1/55/61/f1556127bf70f2f3b9e30f37c03d600b.jpg",
    description:
      "Gamakichi, a notable toad from Mount Myōboku, plays a significant role in the Naruto series. As the eldest son of Gamabunta and older brother to Gamatatsu, he serves as Naruto Uzumaki's personal summon. Initially portrayed as comedic and condescending, Gamakichi matures in Part II, showcasing knowledge in human-toad combination techniques and natural energy.Throughout the series, Gamakichi proves formidable, exhibiting skills in ninjutsu, including the Reverse Summoning Technique and collaboration techniques with his brother. Notably, he contributes to pivotal battles, such as the Three-Tails' confrontation and Pain's Assault. His growth is evident during the Fourth Shinobi World War, where he showcases enhanced size, weaponry, and the ability to use senjutsu.Gamakichi's character adds both humor and depth to the Naruto narrative, embodying the series' themes of growth, collaboration, and the interconnectedness of the ninja world. ",
  },
  {
    id: 5,
    title: "Gamatatsu",
    image:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/84dc13b7-a2e7-4b45-83ec-311e72e82900/dd30vs7-4475c860-f399-4af2-9019-61cafba48029.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg0ZGMxM2I3LWEyZTctNGI0NS04M2VjLTMxMWU3MmU4MjkwMFwvZGQzMHZzNy00NDc1Yzg2MC1mMzk5LTRhZjItOTAxOS02MWNhZmJhNDgwMjkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lFZHN_9Xrp7PmGsmZVvDjMeyy86O7gtEhI9FKY2jtH4",
    description:
      "Gamatatsu, a toad from Mount Myōboku in the Naruto series, serves as the youngest son of Gamabunta and the brother of Gamakichi. Debuted in both the anime and manga, Gamatatsu is characterized by a somewhat naive and childish personality, often prioritizing snacks over serious matters. Despite his carefree demeanor, he occasionally displays curiosity, aiding Naruto in solving puzzles during missions.Predominantly yellow with orange markings, Gamatatsu grows significantly in Part II, showcasing the ability to collaborate with Naruto on powerful techniques, including the Wind Release: Toad Oil Bullet. His appearances in missions like the Cursed Warrior Extermination and Kaima Capture highlight his sometimes unexpected usefulness. While not featured in the Part II manga, Gamatatsu contributes to the anime narrative, embodying the whimsical and unpredictable nature of the ninja world.",
  },
  {
    id: 6,
    title: "Gamabunta",
    image: "https://live.staticflickr.com/3190/2549750562_4524309e46_z.jpg",
    description:
      "Gamabunta, also known as Bunta, is a prominent character in the Naruto series, serving as the chief toad of Mount Myōboku. Introduced in the first Naruto chapter and episode, he becomes a recurring summon for notable characters like Jiraiya, Minato, and Naruto. Gamabunta is portrayed as a grumpy and stubborn toad with a strong sense of duty and a dislike for taking orders unless the summoner earns his respect. Despite his rough exterior, he is fiercely protective of his kind and holds a particular admiration for Naruto, viewing him almost like a son. Gamabunta is one of the largest summons in the series, comparable in size to a tailed beast, and possesses formidable abilities in ninjutsu, kenjutsu, and physical prowess. His notable appearances include battles during the Chūnin Exams, Konoha Crush, and Pain's Assault. Additionally, he features in various Naruto movies, showcasing his significance in the series' lore.",
  },
  // Add more frog data as needed
]);
</script>

<style lang="scss" scoped></style>
