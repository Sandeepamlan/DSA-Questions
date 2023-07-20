#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>

using namespace std;

int maximum_total_value(int N, vector<int>& arr) {
    unordered_map<int, int> frequency;
    for (int num : arr) {
        frequency[num]++;
    }

    vector<pair<int, int>> sorted_freq(frequency.begin(), frequency.end());
    sort(sorted_freq.begin(), sorted_freq.end(), [](const auto& a, const auto& b) {
        return a.second > b.second;
    });

    int antonio_value = 0;
    int girlfriend_value = 0;

    for (const auto& entry : sorted_freq) {
        int num = entry.first;
        int freq = entry.second;
        
        if (freq % 2 == 1) {
            if (antonio_value < girlfriend_value) {
                antonio_value += freq;
            } else {
                girlfriend_value += freq;
            }
        } else {
            antonio_value += freq / 2;
            girlfriend_value += freq / 2;
        }
    }

    int max_total_value = antonio_value + girlfriend_value;
    return max_total_value;
}

int main() {
    int N;
    cin >> N;

    vector<int> arr(N);
    for (int i = 0; i < N; i++) {
        cin >> arr[i];
    }

    int result = maximum_total_value(N, arr);
    cout << result << endl;

    return 0;
}
