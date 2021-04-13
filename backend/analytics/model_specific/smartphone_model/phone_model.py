class Model:
    def __init__(self):
        self.model = ""
        self.camera_pos = 0
        self.camera_neg = 0
        self.camera_pol = 0
        self.camera_count = 0
        self.display_pos = 0
        self.display_neg = 0
        self.display_pol = 0
        self.display_count = 0
        self.battery_pos = 0
        self.battery_neg = 0
        self.battery_pol = 0
        self.battery_count = 0
        self.face_recognition_pos = 0
        self.face_recognition_neg = 0
        self.face_recognition_pol = 0
        self.face_recognition_count = 0
        self.finger_print_pos = 0
        self.finger_print_neg = 0
        self.finger_print_pol = 0
        self.finger_print_count = 0
        self.speakers_pos = 0
        self.speakers_neg = 0
        self.speakers_pol = 0
        self.speakers_count = 0

    def set_model_name(self, name):
        self.model = name

    def get_camera_pos(self):
        return self.camera_pos

    def set_camera_pos(self, value):
        self.camera_pos = value

    def get_camera_neg(self):
        return self.camera_neg

    def set_camera_neg(self, value):
        self.camera_neg = value

    def set_camera(self, score):
        if score == 1:
            self.camera_pos += score
            self.camera_count += 1
        if score == -1:
            self.camera_neg += score
            self.camera_count += 1

    def set_camera_pol(self, score):
        self.camera_pol = score

    def get_camera_pol(self):
        return self.camera_pol

    def get_camera_count(self):
        return self.camera_count

    def get_display_pos(self):
        return self.display_pos

    def set_display_pos(self, value):
        self.display_pos = value

    def get_display_neg(self):
        return self.display_neg

    def set_display_neg(self, value):
        self.display_neg = value

    def set_display(self, score):
        if score == 1:
            self.display_pos += score
            self.display_count += 1
        if score == -1:
            self.display_neg += score
            self.display_count += 1

    def set_display_pol(self, score):
        self.display_pol = score

    def get_display_count(self):
        return self.display_count

    def get_battery_pos(self):
        return self.battery_pos

    def set_battery_pos(self, value):
        self.battery_pos = value

    def get_battery_neg(self):
        return self.battery_neg

    def set_battery_neg(self, value):
        self.battery_neg = value

    def set_battery(self, score):
        if score == 1:
            self.battery_pos += score
            self.battery_count += 1
        if score == -1:
            self.battery_neg += score
            self.battery_count += 1

    def set_battery_pol(self, score):
        self.battery_pol = score

    def get_battery_count(self):
        return self.battery_count

    def get_face_recognition_pos(self):
        return self.face_recognition_pos

    def set_face_recognition_pos(self, value):
        self.face_recognition_pos = value

    def get_face_recognition_neg(self):
        return self.face_recognition_neg

    def set_face_recognition_neg(self, value):
        self.face_recognition_neg = value

    def set_face_recognition(self, score):
        if score == 1:
            self.face_recognition_pos += score
            self.face_recognition_count += 1
        if score == -1:
            self.face_recognition_neg += score
            self.face_recognition_count += 1

    def set_face_recognition_pol(self, score):
        self.face_recognition_pol = score

    def get_face_recognition_count(self):
        return self.face_recognition_count

    def get_finger_print_pos(self):
        return self.finger_print_pos

    def set_finger_print_pos(self, value):
        self.finger_print_pos = value

    def get_finger_print_neg(self):
        return self.finger_print_neg

    def set_finger_print_neg(self, value):
        self.finger_print_neg = value

    def set_finger_print(self, score):
        if score == 1:
            self.finger_print_pos += score
            self.finger_print_count += 1
        if score == -1:
            self.finger_print_neg += score
            self.finger_print_count += 1

    def set_finger_print_pol(self, score):
        self.finger_print_pol = score

    def get_finger_print_count(self):
        return self.finger_print_count

    def get_speakers_pos(self):
        return self.speakers_pos

    def set_speakers_pos(self, value):
        self.speakers_pos = value

    def get_speakers_neg(self):
        return self.speakers_neg

    def set_speakers_neg(self, value):
        self.speakers_neg = value

    def set_speakers(self, score):
        if score == 1:
            self.speakers_pos += score
            self.speakers_count += 1
        if score == -1:
            self.speakers_neg += score
            self.speakers_count += 1

    def set_speakers_pol(self, score):
        self.speakers_pol = score

    def get_speaker_count(self):
        return self.speakers_count
