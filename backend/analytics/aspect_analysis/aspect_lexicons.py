fingerprint_types = ['onscreen', 'rear', 'powerbutton']
display_types = ['normal', 'curved', 'flip']
charger_types = ['wireless', 'wired']
headphone_jack = ['available', 'none']
size = ['normal', 'large']

FEATURE_TYPES = {
    "display": display_types,
    "fingerprint": fingerprint_types,
    "headphone-jack": headphone_jack,
    "size": size,
}
FEATURE_CATEGORY = ["camera", "display", "battery",
                    "face recognition", "fingerprint", "speakers", "headphone-jack", "headphone", "wireless-charger", "charger", "size"]

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
                     ["wireless charger", "wireless-charge",
                         "wireless charging", "wireless-charging"],
                     ["size"]
                     ]
phones = {
    fingerprint_types[0]: [
        'oneplus-6t',
        'oneplus-7t',
        'oneplus-7-pro',
        'oneplus-8-pro',
        'oneplus-8t',
        #  'oneplus-6t',
        #  'oneplus-6t',
        #  'oneplus-6t',
        #  'oneplus-6t',
        #  'oneplus-6t',
    ],
    fingerprint_types[1]: [
        'oneplus-6',
        'oneplus-nord-n100',
        #  'oneplus-6t',
        #  'oneplus-6t',
        #  'oneplus-6t',
    ],
    fingerprint_types[2]: [
        'realme-6',
        'realme-6-pro',
        #  'oneplus-nord-n100',
        #  'oneplus-6t',
        #  'oneplus-6t',
        #  'oneplus-6t',

    ],
    display_types[0]: [
        "samsung-galaxy-s10",
        "samsung-galaxy-s9",
    ],
    display_types[1]: [
        "samsung-galaxy-s10+",
        "samsung-galaxy-s9+",
        'oneplus-7-pro',
        'oneplus-8-pro',
        'oneplus-8t'
    ],
    display_types[2]: [
        'samsung-galaxy-z-flip'
    ],
    charger_types[0]: [

    ],
    charger_types[1]: [

    ],

    headphone_jack[0]: [
        'huawei-honor-9',
        'huawei-honor-8s',
    ],
    headphone_jack[1]: [
        'oneplus-7t',
        'oneplus-7-pro',
        'oneplus-8t',
        'oneplus-8-pro',
    ],
    size[0]: [
        'apple-iphone-8',
    ],
    size[1]: [
        'apple-iphone-8-plus',
    ]
}
