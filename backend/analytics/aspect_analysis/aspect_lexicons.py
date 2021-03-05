fingerprint_types = ['Onscreen', 'Rear']
display_types = ['Curved', 'Normal', 'Flip']
charger_types = ['Wireless', 'Wired']
headphone_jack = ['Available', 'None']
phone_size = ['Normal', 'Large']

FEATURE_TYPES = {
    "Display": display_types,
    "Fingerprint": fingerprint_types,
    "Charger": charger_types,
    "Headphone-Jack": headphone_jack,
    "Phone-Size": phone_size,
}
FEATURE_CATEGORY = ["camera", "display", "battery",
                    "face recognition", "fingerprint", "speakers", "headphone-jack", "headphone", "wireless-charger", "charger"]

category_synonyms = [["camera"],
                     ["display", "screen"],
                     ["battery"],
                     ["face recognition", "face id",
                      "recognition", "face-recognition"],
                     ["fingerprint", "reader"],
                     ["speakers", "speaker", "sound"],
                     ["headphone jack", "headphone-jack"],
                     ["headphone", "earphone"],
                     ["charger", "charge", "charging"],
                     ["wireless charger", "wireless-charge", "wireless charging", "wireless-charging"]]
